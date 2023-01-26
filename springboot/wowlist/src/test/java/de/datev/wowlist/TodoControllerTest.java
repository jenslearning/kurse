package de.datev.wowlist;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    TodoService todoService;

    @BeforeEach
    public void deleteTodos() {
        todoService.setTodoList(new ArrayList<>());
    }

    @Autowired
    ObjectMapper mapper;

    @Test
    public void getAllTodos() throws Exception {
        mockMvc.perform(get("/todos"))
                .andExpect(jsonPath("$").isArray())
                .andExpect(status().isOk()); // check that status code is 200/ok
    }

    @Test
    public void createTodo() throws Exception {
        // expect no todos
        mockMvc.perform(get("/todos"))
                .andExpect(status().isOk()) // check that status code is 200/ok
                .andExpect(jsonPath("$", Matchers.hasSize(0))); //check that array has size 1

        // create one todo
        mockMvc.perform(post("/todos").content("{\"description\": \"TODO TEST createTodo\"}").contentType(MediaType.APPLICATION_JSON)) //MediaType.APPLICATION_JSON damit kein 415 kommt
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andExpect(jsonPath("$.description", Matchers.equalTo("TODO TEST createTodo")));

        // expect two todos
        mockMvc.perform(get("/todos"))
                .andExpect(jsonPath("$", Matchers.hasSize(1)));
    }

    @Test
    public void changeTodo() throws Exception {
        // create one todo
        // get the complete response og this call into "response"
        String response = mockMvc.perform(post("/todos")
                        .content("{\"description\": \"TODO TEST updateTodo\"}")
                        .contentType(MediaType.APPLICATION_JSON)) //MediaType.APPLICATION_JSON damit kein 415 kommt
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andExpect(jsonPath("$.description", Matchers.equalTo("TODO TEST updateTodo")))
                .andReturn().getResponse().getContentAsString();

        //Objectmapper maps the stream into readable Todo Object (so that we can get the ID)
        Todo createdTodo = mapper.readValue(response, Todo.class);

        mockMvc.perform(put("/todos/" + createdTodo.getId()).content("{\"description\": \"TODO TEST updateTodo - UPDATED\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void deleteTodo() throws Exception {
        // create one todo
        // get the complete response og this call into "response"
        String response = mockMvc.perform(post("/todos")
                        .content("{\"description\": \"TODO TEST updateTodo\"}")
                        .contentType(MediaType.APPLICATION_JSON)) //MediaType.APPLICATION_JSON damit kein 415 kommt
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andExpect(jsonPath("$.description", Matchers.equalTo("TODO TEST updateTodo")))
                .andReturn().getResponse().getContentAsString();

        //Objectmapper maps the stream into readable Todo Object (so that we can get the ID)
        Todo createdTodo = mapper.readValue(response, Todo.class);

        mockMvc.perform(delete("/todos/" + createdTodo.getId()))
                .andExpect(status().isOk());
    }
}
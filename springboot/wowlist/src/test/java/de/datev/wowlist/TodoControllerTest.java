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
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.UUID;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class TodoControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper mapper;

    @Autowired
    TodoRepository todoRepository;

    @BeforeEach
    public void cleanDatabase() {
        todoRepository.deleteAll();
    }

    @Test
    public void getAllTodos_returnsAllTodos() throws Exception {
        getAllTodos()
                .andExpect(jsonPath("$").isEmpty());
    }

    @Test
    public void createTodo() throws Exception {
        // expect that there is one todo
        getAllTodos()
                .andExpect(jsonPath("$", Matchers.hasSize(0)));

        // create one
        createTodoWithDescription();

        // expect two
        getAllTodos()
                .andExpect(jsonPath("$", Matchers.hasSize(1)));
    }

    @Test
    public void changeTodo() throws Exception {
        // create one
        String response = createTodoWithDescription();

        Todo createdTodo = mapper.readValue(response, Todo.class);

        changeTodoWithId(createdTodo);
    }

    private void changeTodoWithId(Todo createdTodo) throws Exception {
        mockMvc.perform(put("/todos/" + createdTodo.getId()).content("{ \"description\": \"Kaffee kochen\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void deleteTodo() throws Exception {
        // create one
        String response = createTodoWithDescription();

        Todo createdTodo = mapper.readValue(response, Todo.class);

        mockMvc.perform(delete("/todos/" + createdTodo.getId())).andExpect(status().isOk());
    }

    @Test
    public void getTodoByDescription() throws Exception {
        String response = createTodoWithDescription();

        Todo createdTodo = mapper.readValue(response, Todo.class);
        mockMvc.perform(get("/todos/query").queryParam("description", createdTodo.getDescription())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].description", Matchers.equalTo("Tee kochen")))
                .andExpect(jsonPath("$", Matchers.hasSize(1)));
    }

    @Test
    public void createSubTask() throws Exception {
        String response = createTodoWithDescription();

        Todo createdTodo = mapper.readValue(response, Todo.class);
        UUID id = createdTodo.getId();
        mockMvc.perform(post("/todos/" + id + "/subtask")
                        .content("{ \"description\": \"SUBTASK I\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.subtask[0].id").exists())
                .andExpect(jsonPath("$.subtask[0].description", Matchers.equalTo("SUBTASK I")));
    }

    private ResultActions getAllTodos() throws Exception {
        return mockMvc.perform(get("/todos"))
                .andExpect(status().isOk());
    }

    private String createTodoWithDescription() throws Exception {
        return mockMvc.perform(post("/todos")
                        .content("{ \"description\": \"Tee kochen\"}")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").exists())
                .andExpect(jsonPath("$.description", Matchers.equalTo("Tee kochen")))
                .andReturn().getResponse().getContentAsString();
    }


}

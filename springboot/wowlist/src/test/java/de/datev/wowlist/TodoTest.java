package de.datev.wowlist;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Set;

public class TodoTest {
    @Test
    public void descriptionShouldNotBeEmpty() {
        Todo todoWithBlankDescription = new Todo();
        todoWithBlankDescription.setDescription("");

        Validator validator = Validation.buildDefaultValidatorFactory().getValidator();
        Set<ConstraintViolation<Todo>> violations = validator.validate(todoWithBlankDescription);
        Assertions.assertEquals(1, violations.size());
    }

}

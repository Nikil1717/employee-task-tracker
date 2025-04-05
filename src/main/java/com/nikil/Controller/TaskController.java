package com.nikil.controller;

import com.nikil.model.Task;
import com.nikil.model.User;
import com.nikil.service.TaskService;
import com.nikil.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    // Create new task
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    // Get all tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    // Get tasks assigned to a specific user
    @GetMapping("/user/{email}")
    public List<Task> getTasksByUser(@PathVariable String email) {
        Optional<User> userOpt = userService.findByEmail(email);
        return userOpt.map(taskService::getTasksByUser).orElse(null);
    }

    // Update a task
    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task updatedTask) {
        updatedTask.setId(id);
        return taskService.updateTask(updatedTask);
    }
}


package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@SpringBootApplication
public class HelloWorldCtrl {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldCtrl.class, args);
    }

    @GetMapping("/hello")
    public String helloWorld() {
        return "hello";
    }
}

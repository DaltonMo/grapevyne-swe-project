package com.grapevyne.auth.controller;

import com.grapevyne.auth.model.User;
import com.grapevyne.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(Map.of(
                "id", savedUser.getId(),
                "username", savedUser.getUsername(),
                "email", savedUser.getEmail()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User login) {
        return userRepository.findByUsername(login.getUsername())
                .filter(user -> passwordEncoder.matches(login.getPassword(), user.getPassword()))
                .map(user -> ResponseEntity.ok("Login success (TODO: Return JWT)"))
                .orElse(ResponseEntity.status(401).body("Invalid credentials"));
    }
}

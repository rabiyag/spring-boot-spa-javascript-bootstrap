package com.rabiya.spa;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // No additional methods are needed; JpaRepository provides basic CRUD operations.
}

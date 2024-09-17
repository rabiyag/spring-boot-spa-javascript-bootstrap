
# Spring Boot SPA with JavaScript and Bootstrap

This project is a **Single Page Application (SPA)** built using **Spring Boot** for the backend and **JavaScript** with **Bootstrap** for the frontend. It demonstrates how to integrate a simple, modern SPA with a Spring Boot application, utilizing JavaScript for dynamic content and Bootstrap for responsive design.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [Usage](#usage)

## Features
- **SPA** using JavaScript and **Bootstrap**.
- Dynamic content loading without page refreshes.
- Responsive design using **Bootstrap**.
- Basic Spring Boot REST API for serving data to the frontend.

## Technologies Used
- **Spring Boot** (backend)
- **JavaScript** (frontend interactivity)
- **Bootstrap** (UI design)
- **Maven** (for dependency management)g

## Project Structure
```
src/main/java
    ├── controller      # Spring Boot controller for serving API requests
    ├── model # Models representing data for the API 
    ├── service         # Service with business logic and circuit breaker
src/main/resources
    └── application.properties # Application configuration
src/main/webapp
    └── js # JavaScript files for frontend interactivity
    └── css # Bootstrap and custom CSS for styling
    └── index.html # Main entry point for the SPA

```

## Prerequisites
- **JDK 8** or higher
- **Maven** for dependency management

## Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/rabiyag/spring-boot-spa-javascript-bootstrap.git
   cd spring-boot-spa-javascript-bootstrap
   ```

2. **Build the project with Maven**:
   ```bash
   mvn clean install
   ```

## Running the Application
1. **Run the application**:
   ```bash
   mvn spring-boot:run
   ```

2. **Access the application**:
   - The application will run on `http://localhost:8080` by default.

## Usage
- The application will load a dynamic SPA interface built with JavaScript and styled with Bootstrap.
- It will interact with the Spring Boot backend through REST API calls to fetch and display data.

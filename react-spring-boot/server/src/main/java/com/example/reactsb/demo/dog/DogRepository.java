package com.example.reactsb.demo.dog;

import org.springframework.data.jpa.repository.JpaRepository;


interface DogRepository extends JpaRepository<Dog, Long> {

}



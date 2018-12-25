package com.example.reactsb.demo.dog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class DogController {

    private DogRepository dogRepository;

    public DogController(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
        Stream.of("Bulldog","German Shepherd", "Golden Retriever", "Siberian Husky", "Great Dane","Affenpinscher","Pointer", "King Charles Spaniel").forEach(name ->
                dogRepository.save(new Dog(name))
        );
        dogRepository.findAll().forEach(System.out::println);
    }

    @GetMapping("/great-dogs")
    public Collection<Dog> greatDogs() {
        return dogRepository.findAll().stream().filter(this::isGreat).collect(Collectors.toList());
    }

    private boolean isGreat(Dog dog) {
        return !dog.getId().equals("Affenpinscher") && !dog.getName().equals("Pointer") && !dog.getName().equals("King Charles Spaniel");
    }
}

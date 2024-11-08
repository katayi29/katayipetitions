package com.katayi.katayipetitions.controller;

import com.katayi.katayipetitions.model.Petition;
import com.katayi.katayipetitions.model.Signature;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class PetitionController {

    private List<Petition> petitions = new ArrayList<>();

    public PetitionController() {
        // Initialize with some petitions, auto-generating IDs using UUID
        petitions.add(new Petition(UUID.randomUUID().toString(), "Save the Forest", "We need to save the forest from deforestation", "Alice"));
        petitions.add(new Petition(UUID.randomUUID().toString(), "Protect Ocean Life", "We must protect ocean life from pollution", "John"));
    }

    @GetMapping("/petitions")
    public List<Petition> getAllPetitions() {
        return petitions;
    }

    @PostMapping("/petitions")
    public Petition createPetition(@RequestBody Petition petition) {
        // Auto-generate an ID for the new petition
        petition.setId(UUID.randomUUID().toString());
        petitions.add(petition);
        return petition;
    }

    @GetMapping("/petitions/search")
    public List<Petition> searchPetitions(@RequestParam String keyword) {
        List<Petition> result = new ArrayList<>();
        for (Petition petition : petitions) {
            if (petition.getTitle().contains(keyword) || petition.getDescription().contains(keyword)) {
                result.add(petition);
            }
        }
        return result;
    }

    @GetMapping("/petitions/{id}")
    public Petition viewPetition(@PathVariable String id) {
        return petitions.stream().filter(p -> p.getId().equals(id)).findFirst().orElse(null);
    }

    @PostMapping("/petitions/{id}/sign")
    public String signPetition(@PathVariable String id, @RequestBody Signature signature) {
        Petition petition = petitions.stream().filter(p -> p.getId().equals(id)).findFirst().orElse(null);
        if (petition != null) {
            petition.getSignatures().add(signature);
            return "Successfully signed the petition.";
        }
        return "Petition not found.";
    }
}

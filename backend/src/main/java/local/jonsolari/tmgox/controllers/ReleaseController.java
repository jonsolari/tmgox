package local.jonsolari.tmgox.controllers;

import local.jonsolari.tmgox.models.Release;
import local.jonsolari.tmgox.services.ReleaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/releases")
public class ReleaseController
{
    @Autowired
    private ReleaseService releaseService;
    // GET http://localhost:2019/releases/releases
    @GetMapping(value = "/releases",
                produces = {"application/json"})
    public ResponseEntity<?> ListAllReleases()
    {
        List<Release> myList = releaseService.findAll();
        return new ResponseEntity<>(myList, HttpStatus.OK);
    }
}
package com.project_arjs.demo_serv;

import com.project_arjs.demo_serv.DTO.CoordinateDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoordinateController {
	
	@CrossOrigin(origins = "http://localhost:8080")
    @PostMapping("/echo_coordinates")
    public CoordinateDTO echoCoordinates(@RequestBody CoordinateDTO coordinateDTO) {
        return coordinateDTO;
    }

}
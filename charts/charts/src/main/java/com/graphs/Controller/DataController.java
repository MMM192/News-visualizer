package com.graphs.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.graphs.Services.chartservices;
import com.graphs.entity.NumberGraph;
import com.graphs.repository.chartrepository;

@RestController
@RequestMapping(path="/app1/graph1")

@CrossOrigin({"http://localhost:3000/"})
public class DataController {
   
    @Autowired
	private chartservices chart;
    
    @GetMapping(path="/all")
	public List<NumberGraph> showAllProducts()
	{
		return chart.getEntities();
	}
	
	

  
}

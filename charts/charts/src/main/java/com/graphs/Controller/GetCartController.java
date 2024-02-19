package com.graphs.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.graphs.Services.GetCartServices;
import com.graphs.entity.GetCart;

import java.util.List;


@RestController
@RequestMapping(path="/app/graph")

@CrossOrigin({"http://localhost:3000/"})

public class GetCartController {

	
	/* @Autowired
	private GetCartServices getCartServices;*/
	
	  @Autowired
		private GetCartServices chart;
	  
	  
	 
	    
	    @GetMapping(path="/all")
		public List<GetCart> showAllProducts()
		{
	    	
	    	
			return chart.getEntities();
		}
	    
	    
	    /*
		@PostMapping(path="/qury")
		public List<GetCart> getPersonsInfoByFirstNameAndEmail(@RequestParam("year") Integer year){
			
			
			List<GetCart> personList = chart.getNameAndPrice(year);
			personList.forEach(System.out::println);
		
			System.out.println("zzzzzzzzzzzzzzzzzzzz"+personList);
		
			return personList;

		
			
		}
		*/
		
		
		
}






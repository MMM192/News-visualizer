package com.graphs.Services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graphs.entity.GetCart;

//import com.graphs.repository.End_year_repository;
import com.graphs.repository.GetChartRepository;



@Service
public class GetCartServices {
	
	@Autowired
	private GetChartRepository cha;
	
	/*
	@Autowired
	private End_year_repository endyear;*/
	public List<GetCart> getEntities() {
		
		
		return cha.findAll();
	}

	
	/*
	private  GetChartRepository productRepository;

    

    public List<GetCart> getNameAndPrice(Integer a) {
        return productRepository.findByNameAndPrice(a);
    }*/
    
    
    
    
    
	
	/*
	public List<GetCart> findendyear(String year ) {
		return endyear.finedbtendyear(year);
	}
	*/
	
	
	
	
	
	
	
	

	
}





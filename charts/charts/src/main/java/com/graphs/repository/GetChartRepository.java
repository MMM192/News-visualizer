package com.graphs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.graphs.entity.GetCart;


import java.util.List;

public interface GetChartRepository extends JpaRepository<GetCart, Integer>  {

/*
	    
	    @Query("SELECT p FROM data p WHERE p.endYear = :endYear")
	    List<GetCart> findByNameAndPrice(@Param("endYear") Integer endYear);
	    */
	    
		
}



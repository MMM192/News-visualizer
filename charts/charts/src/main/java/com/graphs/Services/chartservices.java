package com.graphs.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graphs.entity.NumberGraph;
import com.graphs.repository.chartrepository;


@Service
public class chartservices {

	@Autowired
	private chartrepository cha;
	
	public List<NumberGraph> getEntities() {
		return cha.findAll();
	}

}

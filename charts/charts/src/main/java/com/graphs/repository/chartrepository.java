package com.graphs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.graphs.entity.NumberGraph;

public interface chartrepository extends JpaRepository<NumberGraph, Integer> {

}



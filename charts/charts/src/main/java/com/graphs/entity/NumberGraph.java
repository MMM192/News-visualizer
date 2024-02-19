package com.graphs.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="graph1")
public class NumberGraph {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name="number")
	private int a;
	
	@Column(name="value")
	private int b;

	public NumberGraph() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NumberGraph(int id, int a, int b) {
		super();
		this.id = id;
		this.a = a;
		this.b = b;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getA() {
		return a;
	}

	public void setA(int a) {
		this.a = a;
	}

	public int getB() {
		return b;
	}

	public void setB(int b) {
		this.b = b;
	}

	@Override
	public String toString() {
		return "NumberGraph [id=" + id + ", a=" + a + ", b=" + b + "]";
	}

	
	
	
}
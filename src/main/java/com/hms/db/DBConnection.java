package com.hms.db;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

	private static Connection conn;
	
	public static Connection getConn() {
		
		try {
			
			//step:1 for connection - load the driver class 
			Class.forName("com.mysql.cj.jdbc.Driver");
			
			//step:2- create a connection
			String url = System.getenv("DB_URL");
			String username = System.getenv("DB_USERNAME");
			String password = System.getenv("DB_PASSWORD");
			
			if (url == null || url.trim().isEmpty()) {
				url = "jdbc:mysql://localhost:3306/hospital";
			}
			if (username == null || username.trim().isEmpty()) {
				username = "root";
			}
			if (password == null) {
				password = "wasim";
			}
			
			conn = DriverManager.getConnection(url, username, password);
			
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		
		return conn;
	}
}

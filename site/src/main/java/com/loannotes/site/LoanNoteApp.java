package com.loannotes.site;

import org.springframework.boot.SpringApplication; 
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;


@SpringBootApplication
public class LoanNoteApp extends SpringBootServletInitializer
{
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return application.sources(LoanNoteApp.class); 
	}
    public static void main( String[] args )
    {
       SpringApplication.run(LoanNoteApp.class, args);
    }
}

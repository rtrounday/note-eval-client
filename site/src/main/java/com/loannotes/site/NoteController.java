package com.loannotes.site;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam; 

@Controller
public class NoteController {
	
	@RequestMapping("/notedetails")
	public String getNote(@RequestParam(value="userId", required=true) String userUid,
			@RequestParam(value="noteId", required=true) String noteId, Model model){
		model.addAttribute("address", "Test Address");
		return "index"; 
	}

}

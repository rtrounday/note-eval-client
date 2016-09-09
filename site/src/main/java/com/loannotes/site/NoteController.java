package com.loannotes.site;
import java.util.StringTokenizer;
import java.util.TreeMap;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.client.RestTemplate; 
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam; 

@Controller
public class NoteController {
	private final String API_SECRET = "ZFwdl0C58Lx7GMxYuEpFCTeBZSdKIZHK4FtKd8f2"; 
	private final String databaseURLTemplate = "https://loannotesassistant.firebaseio.com/users/%s/notes/%s.json?auth=%s"; 
	private TreeMap<String, Object> getNoteDetails(String userUid, String noteUid){
		TreeMap<String, Object> note = new TreeMap<String, Object>(); 
		String getNoteEndpoint = String.format(databaseURLTemplate, userUid, noteUid, API_SECRET); 
		RestTemplate request = new RestTemplate();
		String response = request.getForObject(getNoteEndpoint, String.class).replace("}", "")
				.replace("{", "")
				.replace("\n", "")
				.replace("\"", "");
		StringTokenizer tokenizer = new StringTokenizer(response, ",");
		while(tokenizer.hasMoreTokens()){
			String[] pair = tokenizer.nextToken().split(":");
			note.put(pair[0].replace(" ", ""), pair[1]);
		}
		return note; 
	}
	@RequestMapping("/notedetails")
	public String getNote(@RequestParam(value="userId", required=true) String userId,
			@RequestParam(value="noteId", required=true) String noteId, Model model){
		TreeMap<String, Object> note = getNoteDetails(userId, noteId); 
		model.addAllAttributes(note);
		return "index"; 
	}

}

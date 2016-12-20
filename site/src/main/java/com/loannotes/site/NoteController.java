package com.loannotes.site;
import java.text.DecimalFormat;
import java.text.NumberFormat;
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
	private final NumberFormat formatter = new DecimalFormat("#0.00");
	/*
	 * Given a userUID and a loan note UID, queries the Google Firebase database 
	 * for detailed information regarding the note. 
	 */
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
			if (pair.length == 2)
				note.put(pair[0].replace(" ", ""), pair[1]);
		}
		return note; 
	}
	/*
	 * Creates the resulting templated view of the detailed note listing. 
	 */
	@RequestMapping("/notedetails")
	public String getNote(@RequestParam(value="userId", required=true) String userId,
			@RequestParam(value="noteId", required=true) String noteId, Model model){
		TreeMap<String, Object> note = getNoteDetails(userId, noteId); 
		// Compute and add the equity 
		if (note.get("Equity") == null && note.get("Zillow") != null && note.get("CurrentUPB") != null){
			double unpaidBalance = Double.parseDouble((String)note.get("CurrentUPB")); 
			double currentPrice = Double.parseDouble(((String)note.get("Zillow")).substring(1)); 
			note.put("Equity", formatter.format(unpaidBalance - currentPrice));
		}
		if (note.get("Equity") != null){
			double equity = Double.parseDouble((String)note.get("Equity")); 
			note.put("Equity", formatter.format(equity));
		}
		// Compute and add LTV
		if (note.get("LTV") == null && note.get("Zillow") != null && note.get("CurrentUPB") != null){
			double unpaidBalance = Double.parseDouble((String)note.get("CurrentUPB")); 
			double currentPrice = Double.parseDouble(((String)note.get("Zillow")).substring(1)); 
			note.put("LTV", formatter.format(unpaidBalance/currentPrice));
		}
		model.addAllAttributes(note);
		return "note"; 
	}

}

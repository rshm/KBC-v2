const data =
    [
      {
        "id": 1,
        "question": "What is allowable speed of Emergency Vehicle like Fire tender , Ambulance etc.. while responding to emergency ?",
        "answers": [
          {
            "text": 30,
            "correct": false
          },
          {
            "text": 25,
            "correct": false
          },
          {
            "text": 40,
            "correct": true
          },
          {
            "text": 35,
            "correct": false
          }
        ],
        "fiftyFifty": [
          40,
          30
        ]
      },
      {
        "id": 2,
        "question": "What happens if the display copy of the permit is lost ?",
        "answers": [
          {
            "text": "The job continues",
            "correct": false
          },
          {
            "text": "The permit is cancelled",
            "correct": true
          },
          {
            "text": "Shift in charge is informed  ",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "The permit is cancelled",
          "The job continues"
        ]
      },
      {
        "id": 3,
        "question": "Which permit is required for  entry of vehicles inside plant ?",
        "answers": [
          {
            "text": "Cold work permit is required",
            "correct": false
          },
          {
            "text": "Confined Space entry permit is required",
            "correct": false
          },
          {
            "text": "Hot work permit is required",
            "correct": true
          },
          {
            "text": "Vehicle fitness certificate is required",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Hot work permit is required",
          "Cold work permit is required"
        ]
      },
      {
        "id": 4,
        "question": "Isolation / blind check list is required if  ",
        "answers": [
          {
            "text": "One or more blinds are installed",
            "correct": false
          },
          {
            "text": "Two or more blinds are installed",
            "correct": false
          },
          {
            "text": "Three or more blinds are installed",
            "correct": true
          },
          {
            "text": "Six or more blinds are installed",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Three or more blinds are installed",
          "One or more blinds are installed"
        ]
      },
      {
        "id": 5,
        "question": "Who are the approving authorities for carrying out Hot Work inside the dyke area of hydrocarbon storage tanks?",
        "answers": [
          {
            "text": "Approver I",
            "correct": false
          },
          {
            "text": "Approver I and II",
            "correct": false
          },
          {
            "text": "Approver I, II and III",
            "correct": true
          },
          {
            "text": "Shift In charge",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Approver I, II and III",
          "Approver I"
        ]
      },
      {
        "id": 6,
        "question": "Which type of permit is required for painting a pipeline having surface temperature of less than 50 C?",
        "answers": [
          {
            "text": "HWP",
            "correct": false
          },
          {
            "text": "Cold work permit",
            "correct": true
          },
          {
            "text": "Vessel entry permit",
            "correct": false
          },
          {
            "text": "No permit is required",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Cold work permit",
          "Vessel entry permit"
        ]
      },
      {
        "id": 7,
        "question": "TLV/TWA of Chlorine ",
        "answers": [
          {
            "text": "0.5 ppm",
            "correct": true
          },
          {
            "text": "1 ppm",
            "correct": false
          },
          {
            "text": "5 ppm",
            "correct": false
          },
          {
            "text": "10 ppm",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "0.5 ppm",
          "1 ppm"
        ]
      },
      {
        "id": 8,
        "question": "During the forklift battery charging process which  gas is generated  ?",
        "answers": [
          {
            "text": "CO ",
            "correct": false
          },
          {
            "text": "CO2",
            "correct": false
          },
          {
            "text": "CH4",
            "correct": false
          },
          {
            "text": "Hydrogen",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Hydrogen",
          "CO2"
        ]
      },
      {
        "id": 9,
        "question": "MEWP - Expand the terms",
        "answers": [
          {
            "text": "Manually Elevating Working Platform ",
            "correct": false
          },
          {
            "text": "Mobile Elevated Working Platform",
            "correct": true
          },
          {
            "text": "Motor  Elevating  Working Platform",
            "correct": false
          },
          {
            "text": "None of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Mobile Elevated Working Platform",
          "Motor  Elevating  Working Platform"
        ]
      },
      {
        "id": 10,
        "question": "Nitrogen gas at ambient temp. is ________.",
        "answers": [
          {
            "text": "Lighter then air ",
            "correct": true
          },
          {
            "text": "Heavier then air",
            "correct": false
          },
          {
            "text": "equal then air ",
            "correct": false
          },
          {
            "text": "non applicable",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Lighter then air ",
          "non applicable"
        ]
      },
      {
        "id": 11,
        "question": "For Hazira site Nitrogen Gas line Colour Code is ______.",
        "answers": [
          {
            "text": "Green",
            "correct": false
          },
          {
            "text": "Blue",
            "correct": false
          },
          {
            "text": "Yellow",
            "correct": false
          },
          {
            "text": "White ",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "White ",
          "Yellow"
        ]
      },
      {
        "id": 12,
        "question": "Main Health hazards of Nitrogen gas is ________.",
        "answers": [
          {
            "text": "  Irritation ",
            "correct": false
          },
          {
            "text": "Toxic",
            "correct": false
          },
          {
            "text": "Asphyxiation",
            "correct": true
          },
          {
            "text": "Explosion",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Asphyxiation",
          "Toxic"
        ]
      },
      {
        "id": 13,
        "question": "Draining of process effluent into the SWD (sewage water drain) is",
        "answers": [
          {
            "text": "Non-significant aspect  ",
            "correct": false
          },
          {
            "text": "Significant aspect",
            "correct": true
          },
          {
            "text": "Security violation",
            "correct": false
          },
          {
            "text": NaN,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Significant aspect",
          NaN
        ]
      },
      {
        "id": 14,
        "question": "Which of the following does not constitute an environmental incident?",
        "answers": [
          {
            "text": "Stack Emission ",
            "correct": true
          },
          {
            "text": "Release of HC into atmosphere",
            "correct": false
          },
          {
            "text": "Discharge of Domestic sewage into storm water drain",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Stack Emission ",
          "Discharge of Domestic sewage into storm water drain"
        ]
      },
      {
        "id": 15,
        "question": "In Oxy Acetylene gas cutting set , how many flash back arrestors are to be used?",
        "answers": [
          {
            "text": 4,
            "correct": false
          },
          {
            "text": 6,
            "correct": false
          },
          {
            "text": 2,
            "correct": true
          },
          {
            "text": 8,
            "correct": false
          }
        ],
        "fiftyFifty": [
          2,
          8
        ]
      },
      {
        "id": 16,
        "question": "What is a maximum permissible wind speed during mobile crane operation ?",
        "answers": [
          {
            "text": "40 Km/Hr.",
            "correct": false
          },
          {
            "text": "36 Km/Hr",
            "correct": true
          },
          {
            "text": "20 Km/Hr.",
            "correct": false
          },
          {
            "text": " 25 km/Hr.",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "36 Km/Hr",
          "40 Km/Hr."
        ]
      },
      {
        "id": 17,
        "question": "If SLI  is  not working or not available in crane , the load capacity should not exceed _________________ .",
        "answers": [
          {
            "text": "60% ",
            "correct": true
          },
          {
            "text": 0.7,
            "correct": false
          },
          {
            "text": 0.8,
            "correct": false
          },
          {
            "text": 0.85,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "60% ",
          0.7
        ]
      },
      {
        "id": 18,
        "question": "What is maximum permissible loading capacity of mobile crane if Safe Load Indicator is working ?",
        "answers": [
          {
            "text": "60% ",
            "correct": false
          },
          {
            "text": 0.7,
            "correct": false
          },
          {
            "text": 0.8,
            "correct": false
          },
          {
            "text": 0.85,
            "correct": true
          }
        ],
        "fiftyFifty": [
          0.85,
          0.8
        ]
      },
      {
        "id": 19,
        "question": "Portable ladder shall be placed on  ground with preferable angle.",
        "answers": [
          {
            "text": " 75 deg. ",
            "correct": true
          },
          {
            "text": " 55 deg.",
            "correct": false
          },
          {
            "text": "50 deg.",
            "correct": false
          },
          {
            "text": " 45 deg.",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " 75 deg. ",
          "50 deg."
        ]
      },
      {
        "id": 20,
        "question": "Which is an appropriate anchor point for lanyard of full body harness?",
        "answers": [
          {
            "text": " Sprinkler water pipeline  ",
            "correct": false
          },
          {
            "text": "Impulse tube line",
            "correct": false
          },
          {
            "text": "Permanent structure",
            "correct": true
          },
          {
            "text": "1\" pipe line",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Permanent structure",
          "1\" pipe line"
        ]
      },
      {
        "id": 21,
        "question": "Which is suitable ladder for working inside substation?",
        "answers": [
          {
            "text": "FRP ladder ",
            "correct": true
          },
          {
            "text": "Rope ladder",
            "correct": false
          },
          {
            "text": "Wooden ladder",
            "correct": false
          },
          {
            "text": "Monkey ladder made with mild steel",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "FRP ladder ",
          "Rope ladder"
        ]
      },
      {
        "id": 22,
        "question": "In case of road closure for carrying out any job, information is required to be given",
        "answers": [
          {
            "text": "Fire Dept.  ",
            "correct": false
          },
          {
            "text": "Security Dept",
            "correct": false
          },
          {
            "text": "SSM",
            "correct": false
          },
          {
            "text": "All of the above",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All of the above",
          "Security Dept"
        ]
      },
      {
        "id": 23,
        "question": "At what height Guard/Top rail is required on platform ?",
        "answers": [
          {
            "text": "1050 ",
            "correct": true
          },
          {
            "text": 1150,
            "correct": false
          },
          {
            "text": 1250,
            "correct": false
          },
          {
            "text": 950,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "1050 ",
          1150
        ]
      },
      {
        "id": 24,
        "question": "At what height knee-rail is required on platform ?",
        "answers": [
          {
            "text": "425 mm ",
            "correct": false
          },
          {
            "text": "525 mm",
            "correct": true
          },
          {
            "text": "500 mm",
            "correct": false
          },
          {
            "text": "625 mm",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "525 mm",
          "425 mm "
        ]
      },
      {
        "id": 25,
        "question": "Work at height  means-",
        "answers": [
          {
            "text": "To work above 1.5 meter. from floor level  ",
            "correct": true
          },
          {
            "text": "To work above 3.5 meter . from floor level",
            "correct": false
          },
          {
            "text": "To work above 1.0 meter. from floor level",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "To work above 1.5 meter. from floor level  ",
          "To work above 1.0 meter. from floor level"
        ]
      },
      {
        "id": 26,
        "question": "Specified length of lanyard mentioned in work at height procedure is",
        "answers": [
          {
            "text": "2.5 meter",
            "correct": false
          },
          {
            "text": "1 meter",
            "correct": false
          },
          {
            "text": "2 meter",
            "correct": true
          },
          {
            "text": "3 meter",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "2 meter",
          "2.5 meter"
        ]
      },
      {
        "id": 27,
        "question": "Service to process interconnections devices are provided to prevent _______ .",
        "answers": [
          {
            "text": " Back flow  ",
            "correct": true
          },
          {
            "text": "Forward flow ",
            "correct": false
          },
          {
            "text": "Upward flow",
            "correct": false
          },
          {
            "text": "Leftward flow",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Back flow  ",
          "Upward flow"
        ]
      },
      {
        "id": 28,
        "question": "Who is final approving authority for interlock Bypass > 24 hrs. and < 7 Days for risk category -4?",
        "answers": [
          {
            "text": "Shift Engineer  ",
            "correct": false
          },
          {
            "text": "Production Manager",
            "correct": false
          },
          {
            "text": "Maintenance Manager",
            "correct": false
          },
          {
            "text": "Plant HOD",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Plant HOD",
          "Shift Engineer  "
        ]
      },
      {
        "id": 29,
        "question": "Two basic Type of respirators are ",
        "answers": [
          {
            "text": "Air purifying and Air supplied ",
            "correct": true
          },
          {
            "text": "Air  Purging and Air cleaning",
            "correct": false
          },
          {
            "text": "Air filtering and air cleaning ",
            "correct": false
          },
          {
            "text": "Face mask and Half mask",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Air purifying and Air supplied ",
          "Air filtering and air cleaning "
        ]
      },
      {
        "id": 30,
        "question": "300 bar pressure SCBA cylinder should be replaced if cylinder pressure is less than _____ .",
        "answers": [
          {
            "text": "300 bar ",
            "correct": false
          },
          {
            "text": "45 bar",
            "correct": false
          },
          {
            "text": "270 bar",
            "correct": true
          },
          {
            "text": "250 bar",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "270 bar",
          "45 bar"
        ]
      },
      {
        "id": 31,
        "question": "Working duration of SCBA Set with the capacity of 6 litres and pressure of 300 bar is______. ",
        "answers": [
          {
            "text": " 35 minutes ",
            "correct": true
          },
          {
            "text": "25 minutes",
            "correct": false
          },
          {
            "text": "45 minutes",
            "correct": false
          },
          {
            "text": "40 minutes",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " 35 minutes ",
          "25 minutes"
        ]
      },
      {
        "id": 32,
        "question": "The acronym CPR in paramedics means _______ .",
        "answers": [
          {
            "text": " Cardio pulse ratio ",
            "correct": false
          },
          {
            "text": "Cardio pulmonary ratio",
            "correct": false
          },
          {
            "text": "Cardiopulmonary resuscitation",
            "correct": true
          },
          {
            "text": "Cardio prevention ratio",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Cardiopulmonary resuscitation",
          "Cardio pulmonary ratio"
        ]
      },
      {
        "id": 33,
        "question": "Grounding with earth fault protection is required for protection of ",
        "answers": [
          {
            "text": "Equipment ",
            "correct": false
          },
          {
            "text": "Human Being",
            "correct": false
          },
          {
            "text": "Both of above",
            "correct": true
          },
          {
            "text": "None of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Both of above",
          "None of above"
        ]
      },
      {
        "id": 34,
        "question": "Which of these is the better conductor?",
        "answers": [
          {
            "text": " Earth ",
            "correct": false
          },
          {
            "text": "Aluminium",
            "correct": false
          },
          {
            "text": "GI",
            "correct": false
          },
          {
            "text": "Copper",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Copper",
          "Aluminium"
        ]
      },
      {
        "id": 35,
        "question": "Which type of torch is allowed in operational areas?",
        "answers": [
          {
            "text": "Having voltage less than 24 V ",
            "correct": false
          },
          {
            "text": "Explosion-proof",
            "correct": false
          },
          {
            "text": "Having voltage less than 4.5 V &  Explosion-proof",
            "correct": true
          },
          {
            "text": "No torch is allowed, only hand-lamps are allowed",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Having voltage less than 4.5 V &  Explosion-proof",
          "No torch is allowed, only hand-lamps are allowed"
        ]
      },
      {
        "id": 36,
        "question": "The  colour  code  for  the  identification  of location fire  extinguisher  is ",
        "answers": [
          {
            "text": "Blue and White Bands in a Circle ",
            "correct": false
          },
          {
            "text": "Red and White Bands in a Circle",
            "correct": false
          },
          {
            "text": "Green And White Bands in a circle",
            "correct": false
          },
          {
            "text": "Black & Yellow Stripes",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Black & Yellow Stripes",
          "Red and White Bands in a Circle"
        ]
      },
      {
        "id": 37,
        "question": "Level -1 PSSR is required to be done for __________.",
        "answers": [
          {
            "text": "MOC with  more than Rs 5.0 crore ",
            "correct": true
          },
          {
            "text": " MOC with less than Rs 5.0 crore",
            "correct": false
          },
          {
            "text": "Both A & B",
            "correct": false
          },
          {
            "text": NaN,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "MOC with  more than Rs 5.0 crore ",
          NaN
        ]
      },
      {
        "id": 38,
        "question": "Level -2 PSSR is required to be done for __________.",
        "answers": [
          {
            "text": "MOC with  more than Rs 5.0 crore ",
            "correct": false
          },
          {
            "text": "MOC with  less than Rs 5.0 crore",
            "correct": false
          },
          {
            "text": "Both A & B",
            "correct": true
          },
          {
            "text": NaN,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Both A & B",
          NaN
        ]
      },
      {
        "id": 39,
        "question": "Effect of inadvertent mixing of chemicals is available from ",
        "answers": [
          {
            "text": "Chemical to chemical interaction Metrix ",
            "correct": true
          },
          {
            "text": "MOC-T",
            "correct": false
          },
          {
            "text": "PSSR",
            "correct": false
          },
          {
            "text": "MIQA",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Chemical to chemical interaction Metrix ",
          "PSSR"
        ]
      },
      {
        "id": 40,
        "question": "What is PHR?",
        "answers": [
          {
            "text": "Process Hazards Review ",
            "correct": true
          },
          {
            "text": "Process Health Review",
            "correct": false
          },
          {
            "text": "Periodic Hazard Review",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Process Hazards Review ",
          "Process Health Review"
        ]
      },
      {
        "id": 41,
        "question": "AS per LOTO procedure ,When the try test (i.e. check of effectiveness of electrical isolation) shall be done?",
        "answers": [
          {
            "text": "  During the job",
            "correct": false
          },
          {
            "text": "Before staring the job",
            "correct": true
          },
          {
            "text": "After completion of job",
            "correct": false
          },
          {
            "text": "No body can do try test",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Before staring the job",
          "After completion of job"
        ]
      },
      {
        "id": 42,
        "question": "The procedure shall be reviewed not later than . ",
        "answers": [
          {
            "text": "2 years from the date of the last revision.   ",
            "correct": false
          },
          {
            "text": "4 years from the date of the last revision. ",
            "correct": false
          },
          {
            "text": "3 years from the date of the last revision. ",
            "correct": true
          },
          {
            "text": "5 years from the date of the last revision. ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "3 years from the date of the last revision. ",
          "5 years from the date of the last revision. "
        ]
      },
      {
        "id": 43,
        "question": "Who can isolate the Radioactive source like Nucleonic gauge in plant equipment ?",
        "answers": [
          {
            "text": " Shift in charge ",
            "correct": false
          },
          {
            "text": "PTW accepter",
            "correct": false
          },
          {
            "text": "Radiation Safety officer (RSO)",
            "correct": true
          },
          {
            "text": "Contractor supervisor",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Radiation Safety officer (RSO)",
          "Contractor supervisor"
        ]
      },
      {
        "id": 44,
        "question": "Grinding machine speed shall be ________. ",
        "answers": [
          {
            "text": "No criteria ",
            "correct": false
          },
          {
            "text": "more than the wheel speed",
            "correct": false
          },
          {
            "text": "Less or equal to the wheel speed",
            "correct": true
          },
          {
            "text": "All of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Less or equal to the wheel speed",
          "more than the wheel speed"
        ]
      },
      {
        "id": 45,
        "question": "Lockout means------",
        "answers": [
          {
            "text": "Placing a notice on the power source to warn others that job is in progress. ",
            "correct": false
          },
          {
            "text": "Blocking the flow of energy from the power source to the equipment.",
            "correct": true
          },
          {
            "text": "Making sure on one can enter your work area.",
            "correct": false
          },
          {
            "text": "None of all",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Blocking the flow of energy from the power source to the equipment.",
          "Placing a notice on the power source to warn others that job is in progress. "
        ]
      },
      {
        "id": 46,
        "question": "Who is responsible for preparing Job Planning for Line Break activity?",
        "answers": [
          {
            "text": "Mechanical ",
            "correct": false
          },
          {
            "text": "CTS",
            "correct": false
          },
          {
            "text": "Safety ",
            "correct": false
          },
          {
            "text": "Process",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Process",
          "Mechanical "
        ]
      },
      {
        "id": 47,
        "question": "Who will ensure that equipment / pipeline etc. are cleared before starting line break job?",
        "answers": [
          {
            "text": "Shift-in-charge ",
            "correct": true
          },
          {
            "text": "CTS engineer",
            "correct": false
          },
          {
            "text": "Mechanical Engineer",
            "correct": false
          },
          {
            "text": "Contractor supervisor",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Shift-in-charge ",
          "Contractor supervisor"
        ]
      },
      {
        "id": 48,
        "question": "How are the hazards in the job communicated to the working crew before line break activity?",
        "answers": [
          {
            "text": "By safety video screening ",
            "correct": false
          },
          {
            "text": "Tool Box Talk",
            "correct": true
          },
          {
            "text": "Level-2 training",
            "correct": false
          },
          {
            "text": "All of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Tool Box Talk",
          "Level-2 training"
        ]
      },
      {
        "id": 49,
        "question": "A horizontal rail secured to standards and erected along the exposed edges of scaffolds to prevent workmen from falling.   ",
        "answers": [
          {
            "text": "Guard rail ",
            "correct": true
          },
          {
            "text": "Knee rail",
            "correct": false
          },
          {
            "text": "Toe rail ",
            "correct": false
          },
          {
            "text": "all the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Guard rail ",
          "all the above"
        ]
      },
      {
        "id": 50,
        "question": "A gas which is resistant to chemical action under normally encountered conditions is called ",
        "answers": [
          {
            "text": "Ideal gas ",
            "correct": false
          },
          {
            "text": "Flammable gas",
            "correct": false
          },
          {
            "text": "Toxic gas",
            "correct": false
          },
          {
            "text": "Inert gas",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Inert gas",
          "Ideal gas "
        ]
      },
      {
        "id": 51,
        "question": " The ----- shall display the copy of approved HITRA along with PTW at the job location.   ",
        "answers": [
          {
            "text": " Issuer ",
            "correct": false
          },
          {
            "text": "Field Executive",
            "correct": false
          },
          {
            "text": "Acceptor",
            "correct": true
          },
          {
            "text": "Contractor Supervisor",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Acceptor",
          "Field Executive"
        ]
      },
      {
        "id": 52,
        "question": "In HITRA,  Install noise enclosure ---- ",
        "answers": [
          {
            "text": "Elimination ",
            "correct": false
          },
          {
            "text": "Substitution",
            "correct": false
          },
          {
            "text": "Engineering control ",
            "correct": true
          },
          {
            "text": "Administrative control",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Engineering control ",
          "Substitution"
        ]
      },
      {
        "id": 53,
        "question": "In HITRA,  Automate process ---- ",
        "answers": [
          {
            "text": "Elimination ",
            "correct": false
          },
          {
            "text": "Substitution",
            "correct": true
          },
          {
            "text": "Engineering control ",
            "correct": false
          },
          {
            "text": "Administrative control",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Substitution",
          "Administrative control"
        ]
      },
      {
        "id": 54,
        "question": "In HITRA,  Implementing permit-to-work system ---- ",
        "answers": [
          {
            "text": "Elimination ",
            "correct": false
          },
          {
            "text": "Substitution",
            "correct": false
          },
          {
            "text": "Engineering control ",
            "correct": false
          },
          {
            "text": "Administrative control",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Administrative control",
          "Elimination "
        ]
      },
      {
        "id": 55,
        "question": "In HITRA,  Redesign workplace layout",
        "answers": [
          {
            "text": "Elimination ",
            "correct": false
          },
          {
            "text": "Substitution",
            "correct": false
          },
          {
            "text": "Engineering control ",
            "correct": true
          },
          {
            "text": "Administrative control",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Engineering control ",
          "Administrative control"
        ]
      },
      {
        "id": 56,
        "question": "In HITRA, Working in pairs is---- ",
        "answers": [
          {
            "text": "Elimination ",
            "correct": false
          },
          {
            "text": "Substitution",
            "correct": false
          },
          {
            "text": "Engineering control ",
            "correct": false
          },
          {
            "text": "Administrative control",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Administrative control",
          "Engineering control "
        ]
      },
      {
        "id": 57,
        "question": " Work Permit ----- should take required approvals and endorsement of approvers.",
        "answers": [
          {
            "text": "Acceptor ",
            "correct": false
          },
          {
            "text": " Issuer",
            "correct": true
          },
          {
            "text": "Approval-1",
            "correct": false
          },
          {
            "text": "Contractor supervisor",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Issuer",
          "Contractor supervisor"
        ]
      },
      {
        "id": 58,
        "question": "The section A,B,C,D,E2 of the work permit is to be usually filled-in by the Work Permit ------- ",
        "answers": [
          {
            "text": "Acceptor ",
            "correct": true
          },
          {
            "text": "Issuer",
            "correct": false
          },
          {
            "text": "Approval-1",
            "correct": false
          },
          {
            "text": "Contractor supervisor",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Acceptor ",
          "Issuer"
        ]
      },
      {
        "id": 59,
        "question": "Full form of OMS",
        "answers": [
          {
            "text": "Operation Management system",
            "correct": false
          },
          {
            "text": "Operating Management system",
            "correct": true
          },
          {
            "text": "Operation Managing System",
            "correct": false
          },
          {
            "text": "All of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Operating Management system",
          "Operation Managing System"
        ]
      },
      {
        "id": 60,
        "question": "How many elements  in OMS system",
        "answers": [
          {
            "text": 6,
            "correct": false
          },
          {
            "text": 7,
            "correct": false
          },
          {
            "text": 8,
            "correct": true
          },
          {
            "text": 9,
            "correct": false
          }
        ],
        "fiftyFifty": [
          8,
          6
        ]
      },
      {
        "id": 61,
        "question": "NRR Means",
        "answers": [
          {
            "text": " Noise Reduction Rating ",
            "correct": true
          },
          {
            "text": "Noise Reduction Rules",
            "correct": false
          },
          {
            "text": "Nuremburg Rating Rules",
            "correct": false
          },
          {
            "text": "Noise Rating Rules",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Noise Reduction Rating ",
          "Noise Rating Rules"
        ]
      },
      {
        "id": 62,
        "question": "It is a management tool to ensure fair and consistent actions are taken to ensure people working at site are corrected for intentional or unintentional misbehaviour and mistakes.",
        "answers": [
          {
            "text": "LPR-ZT ",
            "correct": false
          },
          {
            "text": "Consequence Management",
            "correct": true
          },
          {
            "text": "General Safety Rules",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Consequence Management",
          "General Safety Rules"
        ]
      },
      {
        "id": 63,
        "question": "In Consequence Management Process, In case of violation observed shall be reported by person who observes violation called--------",
        "answers": [
          {
            "text": " Interviewer ",
            "correct": false
          },
          {
            "text": "Intervener",
            "correct": true
          },
          {
            "text": "investigator",
            "correct": false
          },
          {
            "text": "Observer ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Intervener",
          " Interviewer "
        ]
      },
      {
        "id": 64,
        "question": "The Permit -------shall be responsible for recognizing and evaluating the hazards throughout the hot work, specifying the essential precautions, and authorizing the work. ",
        "answers": [
          {
            "text": " Issuer ",
            "correct": true
          },
          {
            "text": "acceptor",
            "correct": false
          },
          {
            "text": "Both A and B",
            "correct": false
          },
          {
            "text": " None ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Issuer ",
          "acceptor"
        ]
      },
      {
        "id": 65,
        "question": "Who will Ensure that all necessary supporting certificates/checklists, hazard & risk assessment are attached or referred to in the permit. ",
        "answers": [
          {
            "text": " Acceptor ",
            "correct": false
          },
          {
            "text": "Issuer",
            "correct": true
          },
          {
            "text": "Production Manager",
            "correct": false
          },
          {
            "text": "Plant HOD",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Issuer",
          "Production Manager"
        ]
      },
      {
        "id": 66,
        "question": "Who will ensure that the contractor declaration form is signed and the persons involved in executing the job are competent for performing the job.",
        "answers": [
          {
            "text": " Maintenance Manager",
            "correct": false
          },
          {
            "text": "Plant HOD",
            "correct": false
          },
          {
            "text": " Issuer",
            "correct": false
          },
          {
            "text": "Acceptor",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Acceptor",
          " Maintenance Manager"
        ]
      },
      {
        "id": 67,
        "question": "A bulb that shatters when bubble inside it disappear(Expansion of liquid) in the event of fire breakdown is called as ",
        "answers": [
          {
            "text": "Quartzoid bulb ",
            "correct": true
          },
          {
            "text": "Shatter bulb",
            "correct": false
          },
          {
            "text": "Argon bulb",
            "correct": false
          },
          {
            "text": "Orange bulb",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Quartzoid bulb ",
          "Shatter bulb"
        ]
      },
      {
        "id": 68,
        "question": "A fusible plug used in the heat detectors normally have low",
        "answers": [
          {
            "text": " flash point Dilute point ",
            "correct": false
          },
          {
            "text": "Boiling point",
            "correct": false
          },
          {
            "text": "Melting point",
            "correct": true
          },
          {
            "text": "none of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Melting point",
          "Boiling point"
        ]
      },
      {
        "id": 69,
        "question": "Apparel  used for rescue operation in an area of intense heat ,fire, steam, hot liquid is ?",
        "answers": [
          {
            "text": "Cryogenic suits ",
            "correct": false
          },
          {
            "text": "Specialty Thermal Protective Apparel",
            "correct": true
          },
          {
            "text": "Asbestos suits",
            "correct": false
          },
          {
            "text": "All of them",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Specialty Thermal Protective Apparel",
          "Cryogenic suits "
        ]
      },
      {
        "id": 70,
        "question": "Assembly  points  in  various  plants  have  been  marked",
        "answers": [
          {
            "text": "Trapezium ",
            "correct": false
          },
          {
            "text": "Squared",
            "correct": false
          },
          {
            "text": "Triangle",
            "correct": false
          },
          {
            "text": "Concentric circles",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Concentric circles",
          "Trapezium "
        ]
      },
      {
        "id": 71,
        "question": "Example of substitutions in risk assessment is",
        "answers": [
          {
            "text": "Lock out  ",
            "correct": false
          },
          {
            "text": "Automate Process",
            "correct": true
          },
          {
            "text": "Install Interlocks",
            "correct": false
          },
          {
            "text": "Work Instructions",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Automate Process",
          "Install Interlocks"
        ]
      },
      {
        "id": 72,
        "question": "Best  extinguishing  media  for  liquid  hydrocarbon pool  fire  is  ",
        "answers": [
          {
            "text": " CO2 ",
            "correct": false
          },
          {
            "text": "DCP",
            "correct": false
          },
          {
            "text": "Halon",
            "correct": false
          },
          {
            "text": "Foam",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Foam",
          "DCP"
        ]
      },
      {
        "id": 73,
        "question": "BLEVE  can  take  place  in",
        "answers": [
          {
            "text": "Naphtha ",
            "correct": false
          },
          {
            "text": "Chlorine",
            "correct": false
          },
          {
            "text": "LPG",
            "correct": true
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "LPG",
          "Naphtha "
        ]
      },
      {
        "id": 74,
        "question": "Class -A  flammable  liquid  as  per  Petroleum  Act  is  the  liquid  having  flash  point",
        "answers": [
          {
            "text": "Less than 23 deg C",
            "correct": true
          },
          {
            "text": "More than 23 deg C",
            "correct": false
          },
          {
            "text": "Less than 25 deg C",
            "correct": false
          },
          {
            "text": "More than 25 Deg C",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Less than 23 deg C",
          "More than 23 deg C"
        ]
      },
      {
        "id": 75,
        "question": "Classification of fires is based upon",
        "answers": [
          {
            "text": "  Oxygen levels ",
            "correct": false
          },
          {
            "text": "Nature of fuel",
            "correct": true
          },
          {
            "text": "Amount of heat",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Nature of fuel",
          "Amount of heat"
        ]
      },
      {
        "id": 76,
        "question": "De-energization request after job completion is raised by",
        "answers": [
          {
            "text": "Plant Electrical ",
            "correct": false
          },
          {
            "text": "Area operator",
            "correct": false
          },
          {
            "text": "Executing department",
            "correct": true
          },
          {
            "text": "Safety department",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Executing department",
          "Safety department"
        ]
      },
      {
        "id": 77,
        "question": "Which of these is not a part of Incident Investigation Report ",
        "answers": [
          {
            "text": "Name of the person involved in the incident ",
            "correct": true
          },
          {
            "text": "Key factors",
            "correct": false
          },
          {
            "text": "Name of team members",
            "correct": false
          },
          {
            "text": " Photographs ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Name of the person involved in the incident ",
          "Name of team members"
        ]
      },
      {
        "id": 78,
        "question": "Job preparation checklist before releasing electrical supply to the feeder is checked & filled by ",
        "answers": [
          {
            "text": " Plant Electrical ",
            "correct": true
          },
          {
            "text": "Area operator",
            "correct": false
          },
          {
            "text": "Executing department",
            "correct": false
          },
          {
            "text": "Safety department",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Plant Electrical ",
          "Executing department"
        ]
      },
      {
        "id": 79,
        "question": "During  emergency  AFS  member  will  report  to  ",
        "answers": [
          {
            "text": " SSM",
            "correct": false
          },
          {
            "text": "Fire Officer",
            "correct": true
          },
          {
            "text": "Incident controller",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Fire Officer",
          " SSM"
        ]
      },
      {
        "id": 80,
        "question": "During a vapour cloud formation, water spray",
        "answers": [
          {
            "text": "Cools the cloud below ignition point ",
            "correct": false
          },
          {
            "text": "Disperses the cloud by air mixing",
            "correct": true
          },
          {
            "text": "None of the above",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Disperses the cloud by air mixing",
          "Cools the cloud below ignition point "
        ]
      },
      {
        "id": 81,
        "question": "Deluge Valve works on the principle of",
        "answers": [
          {
            "text": "Differential pressure ",
            "correct": true
          },
          {
            "text": "Cloud identification",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Differential pressure ",
          "Cloud identification"
        ]
      },
      {
        "id": 82,
        "question": "Emergency  siren  is  tested  at  RIL  Hazira  on",
        "answers": [
          {
            "text": " Sunday ",
            "correct": false
          },
          {
            "text": "Tuesday",
            "correct": false
          },
          {
            "text": "Thursday",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "None of the above",
          "Tuesday"
        ]
      },
      {
        "id": 83,
        "question": "Escape set is used to ",
        "answers": [
          {
            "text": "Rescue operations ",
            "correct": false
          },
          {
            "text": " Escape",
            "correct": true
          },
          {
            "text": "Practice",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Escape",
          "Rescue operations "
        ]
      },
      {
        "id": 84,
        "question": "Expand BLEVE ?",
        "answers": [
          {
            "text": "Boiling liquid expanding vapour cloud explosion ",
            "correct": true
          },
          {
            "text": "Boiling liquid explosion vapour cloud expansion",
            "correct": false
          },
          {
            "text": "Boiling liquification expanding vigorous explosion",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Boiling liquid expanding vapour cloud explosion ",
          "Boiling liquid explosion vapour cloud expansion"
        ]
      },
      {
        "id": 85,
        "question": "Whose responsibility to  Maintain  Excellent Housekeeping in the Plant area.",
        "answers": [
          {
            "text": "Plant PSR ",
            "correct": false
          },
          {
            "text": "Manufacturing Head",
            "correct": false
          },
          {
            "text": "Safety dept.",
            "correct": false
          },
          {
            "text": " Each and every individual.",
            "correct": true
          }
        ],
        "fiftyFifty": [
          " Each and every individual.",
          "Safety dept."
        ]
      },
      {
        "id": 86,
        "question": "What is fragile roof",
        "answers": [
          {
            "text": " Sloping roof",
            "correct": false
          },
          {
            "text": "High roof",
            "correct": false
          },
          {
            "text": "A roof which cannot safely support the weight of person",
            "correct": true
          },
          {
            "text": " Curved roof",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "A roof which cannot safely support the weight of person",
          " Curved roof"
        ]
      },
      {
        "id": 87,
        "question": "IDLH Stands for",
        "answers": [
          {
            "text": "Independent of life & health ",
            "correct": false
          },
          {
            "text": "Immediately dangerous to life & Health",
            "correct": true
          },
          {
            "text": "Inactively dangerous to life & health",
            "correct": false
          },
          {
            "text": "none of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Immediately dangerous to life & Health",
          "Independent of life & health "
        ]
      },
      {
        "id": 88,
        "question": "Metal  fire  is  categorized  as    ",
        "answers": [
          {
            "text": "  Class D  ",
            "correct": true
          },
          {
            "text": " Class B ",
            "correct": false
          },
          {
            "text": "Class A",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "  Class D  ",
          "Class A"
        ]
      },
      {
        "id": 89,
        "question": "PHA means",
        "answers": [
          {
            "text": "Process hazard analyser",
            "correct": false
          },
          {
            "text": " Periodic health analysis",
            "correct": false
          },
          {
            "text": "Preventive hazard analysis",
            "correct": false
          },
          {
            "text": "Process Hazard Analysis",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Process Hazard Analysis",
          "Process hazard analyser"
        ]
      },
      {
        "id": 90,
        "question": "STEL stands for",
        "answers": [
          {
            "text": "Standard Toxic Exposure limit ",
            "correct": false
          },
          {
            "text": "Short term Exposure limit",
            "correct": true
          },
          {
            "text": "Safe time Exposure limit",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Short term Exposure limit",
          "Safe time Exposure limit"
        ]
      },
      {
        "id": 91,
        "question": "Teal fires are classified as ",
        "answers": [
          {
            "text": " Class A  ",
            "correct": false
          },
          {
            "text": "Class B ",
            "correct": false
          },
          {
            "text": "Class C ",
            "correct": false
          },
          {
            "text": "Class D",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Class D",
          " Class A  "
        ]
      },
      {
        "id": 92,
        "question": "The  range  of  flammability  indicates",
        "answers": [
          {
            "text": "Threshold limits ",
            "correct": false
          },
          {
            "text": "Explosive limits",
            "correct": true
          },
          {
            "text": "STEL",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Explosive limits",
          "Threshold limits "
        ]
      },
      {
        "id": 93,
        "question": "The  safest  way  to  exit  a  smoke  filled  room  is",
        "answers": [
          {
            "text": "Running ",
            "correct": false
          },
          {
            "text": "Jumping out",
            "correct": false
          },
          {
            "text": "Crawling",
            "correct": true
          },
          {
            "text": "walking",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Crawling",
          "Running "
        ]
      },
      {
        "id": 94,
        "question": "The full form of AFS is",
        "answers": [
          {
            "text": "Auxiliary  fire Station  ",
            "correct": false
          },
          {
            "text": "Active Fire Squad",
            "correct": false
          },
          {
            "text": "Auxiliary Fire squad",
            "correct": true
          },
          {
            "text": "Assisting Fire Squad",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Auxiliary Fire squad",
          "Assisting Fire Squad"
        ]
      },
      {
        "id": 95,
        "question": "The general products of combustion are ",
        "answers": [
          {
            "text": " CO ",
            "correct": false
          },
          {
            "text": "CO & H2O",
            "correct": false
          },
          {
            "text": "CO2 & CO",
            "correct": true
          },
          {
            "text": "Black Damp",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "CO2 & CO",
          "CO & H2O"
        ]
      },
      {
        "id": 96,
        "question": "What  is  UVCE  ?",
        "answers": [
          {
            "text": "Unconfined Vapour Explosion ",
            "correct": false
          },
          {
            "text": "Unconfined vapour cloud explosion",
            "correct": true
          },
          {
            "text": "Unlimited vapour cloud explosion",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Unconfined vapour cloud explosion",
          "Unconfined Vapour Explosion "
        ]
      },
      {
        "id": 97,
        "question": "The red colour QB is rated for temperature",
        "answers": [
          {
            "text": "68 ",
            "correct": true
          },
          {
            "text": 141,
            "correct": false
          },
          {
            "text": 59,
            "correct": false
          },
          {
            "text": 67,
            "correct": false
          }
        ],
        "fiftyFifty": [
          "68 ",
          67
        ]
      },
      {
        "id": 98,
        "question": "What  is  non  sparking  tools made of ?",
        "answers": [
          {
            "text": "Teflon ",
            "correct": false
          },
          {
            "text": "Wood",
            "correct": false
          },
          {
            "text": "Soft metal",
            "correct": false
          },
          {
            "text": "All of these",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All of these",
          "Soft metal"
        ]
      },
      {
        "id": 99,
        "question": "What is class C petroleum product ?",
        "answers": [
          {
            "text": " Flash Point<23 ",
            "correct": false
          },
          {
            "text": "23<Flash Point<93",
            "correct": false
          },
          {
            "text": "65<Flash Point<93",
            "correct": true
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "65<Flash Point<93",
          "23<Flash Point<93"
        ]
      },
      {
        "id": 100,
        "question": "What is TREM",
        "answers": [
          {
            "text": " Transport Card ",
            "correct": false
          },
          {
            "text": "Transport Emergency Card",
            "correct": true
          },
          {
            "text": "Transport Management Card",
            "correct": false
          },
          {
            "text": "Transport Emergency management Card ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Transport Emergency Card",
          " Transport Card "
        ]
      },
      {
        "id": 101,
        "question": "The technique used for determining key factors is",
        "answers": [
          {
            "text": "Why How method ",
            "correct": false
          },
          {
            "text": "Six Sigma method",
            "correct": false
          },
          {
            "text": "Why Why Method",
            "correct": true
          },
          {
            "text": " None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Why Why Method",
          "Six Sigma method"
        ]
      },
      {
        "id": 102,
        "question": "A tanker carrying Benzene from RIL, Hazira site topples near Ichhapore. This is a ",
        "answers": [
          {
            "text": "Process Incident ",
            "correct": false
          },
          {
            "text": "Distribution Incident",
            "correct": true
          },
          {
            "text": " Serious Incident",
            "correct": false
          },
          {
            "text": "Major incident",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Distribution Incident",
          " Serious Incident"
        ]
      },
      {
        "id": 103,
        "question": "Where the nitrogen connection is not permitted ?",
        "answers": [
          {
            "text": "Confined space / building where leaks reduce oxygen level in atmosphere ",
            "correct": true
          },
          {
            "text": "Decommissioning activity in close loop",
            "correct": false
          },
          {
            "text": "For purging in process",
            "correct": false
          },
          {
            "text": "All of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Confined space / building where leaks reduce oxygen level in atmosphere ",
          "For purging in process"
        ]
      },
      {
        "id": 104,
        "question": "Which type hand gloves is required  for  liquid nitrogen handling ?",
        "answers": [
          {
            "text": "Neoprene  ",
            "correct": false
          },
          {
            "text": "Cryogenic hand gloves ",
            "correct": true
          },
          {
            "text": "Cotton hand gloves",
            "correct": false
          },
          {
            "text": "Supported PVC hand gloves",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Cryogenic hand gloves ",
          "Neoprene  "
        ]
      },
      {
        "id": 105,
        "question": "Asphyxiant means ",
        "answers": [
          {
            "text": "A vapour or gas that can cause unconsciousness or death by Suffocation (i.e. lack of oxygen). ",
            "correct": true
          },
          {
            "text": "Normal atmospheric condition",
            "correct": false
          },
          {
            "text": "Atmosphere in confined space",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "A vapour or gas that can cause unconsciousness or death by Suffocation (i.e. lack of oxygen). ",
          "Atmosphere in confined space"
        ]
      },
      {
        "id": 106,
        "question": "NIHL stands for",
        "answers": [
          {
            "text": "Noise Influenced Hearing loss ",
            "correct": false
          },
          {
            "text": " Noise Induced Hearing loss",
            "correct": true
          },
          {
            "text": "Notified Industrial Hearing Loss",
            "correct": false
          },
          {
            "text": "Notified Hearing Industrial Levels",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " Noise Induced Hearing loss",
          "Noise Influenced Hearing loss "
        ]
      },
      {
        "id": 107,
        "question": "Who is the functional owner of PHA document?",
        "answers": [
          {
            "text": "HOD \u2013 CTS ",
            "correct": true
          },
          {
            "text": "HOD \u2013 CES",
            "correct": false
          },
          {
            "text": "HOD \u2013 Plant ",
            "correct": false
          },
          {
            "text": "Manufacturing head",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "HOD \u2013 CTS ",
          "HOD \u2013 CES"
        ]
      },
      {
        "id": 108,
        "question": "Which systems shall not be interconnected to process.",
        "answers": [
          {
            "text": "Plant air ",
            "correct": false
          },
          {
            "text": "Instrument Air",
            "correct": false
          },
          {
            "text": "Breathing Air",
            "correct": true
          },
          {
            "text": " None of the above ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Breathing Air",
          "Plant air "
        ]
      },
      {
        "id": 109,
        "question": "What is FMEA?",
        "answers": [
          {
            "text": "Failure Mode Effect Analysis ",
            "correct": true
          },
          {
            "text": "Fault Mode Effect Analysis",
            "correct": false
          },
          {
            "text": "Failure Mode Engineering Analysis",
            "correct": false
          },
          {
            "text": "Finite Mode Effect Analysis",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Failure Mode Effect Analysis ",
          "Finite Mode Effect Analysis"
        ]
      },
      {
        "id": 110,
        "question": "Aluminized proximity suits are  used where pyrophoric chemicals or molten materials are handled such as -----------?",
        "answers": [
          {
            "text": "TEAL  ",
            "correct": true
          },
          {
            "text": "NAPHTHA",
            "correct": false
          },
          {
            "text": "DEG",
            "correct": false
          },
          {
            "text": "CHLORINE",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "TEAL  ",
          "NAPHTHA"
        ]
      },
      {
        "id": 111,
        "question": "What is frequency of certification of electrical driven portable equipment's",
        "answers": [
          {
            "text": " Monthly ",
            "correct": false
          },
          {
            "text": "Quarterly",
            "correct": false
          },
          {
            "text": "Half-Yearly",
            "correct": true
          },
          {
            "text": "Annually",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Half-Yearly",
          " Monthly "
        ]
      },
      {
        "id": 112,
        "question": "What should be rating of protecting ELCB used during operation of the portable and transportable apparatus",
        "answers": [
          {
            "text": "30 mA ",
            "correct": true
          },
          {
            "text": "60 mA",
            "correct": false
          },
          {
            "text": "100 mA",
            "correct": false
          },
          {
            "text": "Not required",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "30 mA ",
          "100 mA"
        ]
      },
      {
        "id": 113,
        "question": "What are the 4Ps of the OMS ",
        "answers": [
          {
            "text": "People, Process, Plant Performance  ",
            "correct": true
          },
          {
            "text": "People, Performance, Plant, Productivity",
            "correct": false
          },
          {
            "text": "Parameter, Performance, Plant, Productivity",
            "correct": false
          },
          {
            "text": "Planning, Privilege , Plant, Productivity ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "People, Process, Plant Performance  ",
          "Planning, Privilege , Plant, Productivity "
        ]
      },
      {
        "id": 114,
        "question": "MSDS does not provide you following information",
        "answers": [
          {
            "text": "Physical Properties",
            "correct": false
          },
          {
            "text": "Toxicity",
            "correct": false
          },
          {
            "text": "All reactions and side reactions.",
            "correct": true
          },
          {
            "text": "Action needed in case of exposure",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "All reactions and side reactions.",
          "Action needed in case of exposure"
        ]
      },
      {
        "id": 115,
        "question": "As per OSHA acceptable Noise level for 8 hour work shift at the workplace is",
        "answers": [
          {
            "text": "90 dBA",
            "correct": true
          },
          {
            "text": "85 dBA",
            "correct": false
          },
          {
            "text": "80 dBA",
            "correct": false
          },
          {
            "text": "95 dBA",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "90 dBA",
          "80 dBA"
        ]
      },
      {
        "id": 116,
        "question": "When is the contingency plan preparation required during line break activity?",
        "answers": [
          {
            "text": "When working on hydrocarbon line",
            "correct": false
          },
          {
            "text": "When working under single isolation ",
            "correct": true
          },
          {
            "text": "When working in C shift",
            "correct": false
          },
          {
            "text": "All of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "When working under single isolation ",
          "When working in C shift"
        ]
      },
      {
        "id": 117,
        "question": "How long must the Fire Watch remain on duty after hot work activities have ceased/completed?",
        "answers": [
          {
            "text": "It is not necessary for the Fire Watch to remain on duty after hot work activities have ceased.",
            "correct": false
          },
          {
            "text": "30 minutes",
            "correct": true
          },
          {
            "text": "1 hours.",
            "correct": false
          },
          {
            "text": "45 minutes",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "30 minutes",
          "1 hours."
        ]
      },
      {
        "id": 118,
        "question": "Which of these rules is not LPR ZT",
        "answers": [
          {
            "text": "No Violation of work permit condition .",
            "correct": false
          },
          {
            "text": "No horseplay",
            "correct": true
          },
          {
            "text": "No line break without authorization",
            "correct": false
          },
          {
            "text": "No entry in confined space without authorization",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "No horseplay",
          "No line break without authorization"
        ]
      },
      {
        "id": 119,
        "question": "Fire  point  is  ____________  than  Flash  point",
        "answers": [
          {
            "text": "Equal ",
            "correct": false
          },
          {
            "text": "Lower",
            "correct": false
          },
          {
            "text": "Higher",
            "correct": true
          },
          {
            "text": "None of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Higher",
          "None of above"
        ]
      },
      {
        "id": 120,
        "question": "Fire from a pressurized pipeline leak is termed as ",
        "answers": [
          {
            "text": " Plane ",
            "correct": false
          },
          {
            "text": "Jet",
            "correct": true
          },
          {
            "text": "Pool",
            "correct": false
          },
          {
            "text": "None Of Above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Jet",
          "None Of Above"
        ]
      },
      {
        "id": 121,
        "question": "In a chlorine emergency kit, ammonia solution is used for",
        "answers": [
          {
            "text": "Detecting chlorine ",
            "correct": true
          },
          {
            "text": "Detecting impurities in chlorine",
            "correct": false
          },
          {
            "text": "None of the above",
            "correct": false
          },
          {
            "text": "Both the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Detecting chlorine ",
          "None of the above"
        ]
      },
      {
        "id": 122,
        "question": "NFPA  stands  for",
        "answers": [
          {
            "text": "National Fire Prevention Association ",
            "correct": false
          },
          {
            "text": "National Fire Prevention Agency",
            "correct": false
          },
          {
            "text": "National Fire Protocol Association",
            "correct": false
          },
          {
            "text": "National Fire Protection Association",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "National Fire Protection Association",
          "National Fire Protocol Association"
        ]
      },
      {
        "id": 123,
        "question": "Pungent  smell  in  LPG  is  due  to",
        "answers": [
          {
            "text": "Methyl Mercaptan ",
            "correct": false
          },
          {
            "text": "Catalyst",
            "correct": false
          },
          {
            "text": "Surfactant",
            "correct": false
          },
          {
            "text": "Ethyl Mercaptan",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Ethyl Mercaptan",
          "Surfactant"
        ]
      },
      {
        "id": 124,
        "question": "The  colour  code  for  the  identification  of location of  MCP  is ",
        "answers": [
          {
            "text": "Red and White Bands in a Circle ",
            "correct": true
          },
          {
            "text": "Blue and White Bands in a Circle",
            "correct": false
          },
          {
            "text": "Green And White Bands in a circle",
            "correct": false
          },
          {
            "text": "Black &Yellow Stripes",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Red and White Bands in a Circle ",
          "Black &Yellow Stripes"
        ]
      },
      {
        "id": 125,
        "question": "The  plan  that  shows  preparedness  for  handling  any  emergency  of  such  magnitude  that  effects  surrounding  population  and  environment  around  an  installation  is  known  as",
        "answers": [
          {
            "text": "Onsite Emergency plan ",
            "correct": false
          },
          {
            "text": "Offsite emergency plan",
            "correct": true
          },
          {
            "text": "Pre incident plan",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Offsite emergency plan",
          "None of these"
        ]
      },
      {
        "id": 126,
        "question": "The oil in a frying pan in kitchen can catch fire due to ",
        "answers": [
          {
            "text": " Expansion Point ",
            "correct": false
          },
          {
            "text": "Boiling Point",
            "correct": true
          },
          {
            "text": "Dilute Point",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Boiling Point",
          "None of these"
        ]
      },
      {
        "id": 127,
        "question": "The pictorial  representation of safety shower is",
        "answers": [
          {
            "text": "Green And White Bands in a circle ",
            "correct": true
          },
          {
            "text": "Red And White Bands in a circle",
            "correct": false
          },
          {
            "text": "Blue And White Bands in a circle",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Green And White Bands in a circle ",
          "None of these"
        ]
      },
      {
        "id": 128,
        "question": "The pictorial representation of breathing apparatus",
        "answers": [
          {
            "text": "Green And White Bands in a circle ",
            "correct": false
          },
          {
            "text": "Red And White Bands in a circle",
            "correct": false
          },
          {
            "text": "Blue And White Bands in a circle",
            "correct": true
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Blue And White Bands in a circle",
          "Green And White Bands in a circle "
        ]
      },
      {
        "id": 129,
        "question": "The terminology used for extinguishing fire by cutting out air supply is called. ",
        "answers": [
          {
            "text": "Starvation ",
            "correct": false
          },
          {
            "text": "Cooling",
            "correct": false
          },
          {
            "text": "Smothering",
            "correct": true
          },
          {
            "text": " Isolating",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Smothering",
          "Cooling"
        ]
      },
      {
        "id": 130,
        "question": "What are the different modes of heat transfer?",
        "answers": [
          {
            "text": "Convection ",
            "correct": false
          },
          {
            "text": "Conduction",
            "correct": false
          },
          {
            "text": "Radiation",
            "correct": false
          },
          {
            "text": "All of these",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All of these",
          "Conduction"
        ]
      },
      {
        "id": 131,
        "question": "What is the time frame by which the Final Report (Investigation) of high and medium risk should be completed ?",
        "answers": [
          {
            "text": "10 days ",
            "correct": false
          },
          {
            "text": "16 days",
            "correct": true
          },
          {
            "text": "18 days",
            "correct": false
          },
          {
            "text": "21 days",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "16 days",
          "10 days "
        ]
      },
      {
        "id": 132,
        "question": "What is the time frame for forming an incident investigation team ?",
        "answers": [
          {
            "text": "within 8 hours ",
            "correct": false
          },
          {
            "text": " within 24 hours",
            "correct": false
          },
          {
            "text": "within 2 days",
            "correct": true
          },
          {
            "text": "within 3 working days",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "within 2 days",
          "within 8 hours "
        ]
      },
      {
        "id": 133,
        "question": "Hot work-Gas cutting set hose colour code for _________ .",
        "answers": [
          {
            "text": "For oxygen - Black & Acetylene - Blue ",
            "correct": false
          },
          {
            "text": "For oxygen -Blue & Acetylene - Maroon",
            "correct": true
          },
          {
            "text": "For oxygen -Yellow & Acetylene - Maroon",
            "correct": false
          },
          {
            "text": "For oxygen -Maroon & Acetylene - Black",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "For oxygen -Blue & Acetylene - Maroon",
          "For oxygen -Yellow & Acetylene - Maroon"
        ]
      },
      {
        "id": 134,
        "question": "Out of this four gas , Which is the permeant gas  ?",
        "answers": [
          {
            "text": "Chlorine ",
            "correct": true
          },
          {
            "text": "LPG",
            "correct": false
          },
          {
            "text": "CNG",
            "correct": false
          },
          {
            "text": "Argon",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Chlorine ",
          "Argon"
        ]
      },
      {
        "id": 135,
        "question": " For lifting  >30 MT by carne , approval is required from ______ .",
        "answers": [
          {
            "text": "Plant HOD ",
            "correct": false
          },
          {
            "text": "Head CES fabrication & Rigging Cell",
            "correct": false
          },
          {
            "text": "CES Maintenance Head",
            "correct": true
          },
          {
            "text": "HSEF Head",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "CES Maintenance Head",
          "Plant HOD "
        ]
      },
      {
        "id": 136,
        "question": "For Purple Risk, notification and endorsement will be done by,",
        "answers": [
          {
            "text": "Segment Head/ Operating Function Head or Equivalent",
            "correct": true
          },
          {
            "text": "Reliance Entity Leader",
            "correct": false
          },
          {
            "text": "Facility Leader",
            "correct": false
          },
          {
            "text": "Plant HOD",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Segment Head/ Operating Function Head or Equivalent",
          "Plant HOD"
        ]
      },
      {
        "id": 137,
        "question": "Which kind of protective Hand Gloves is used for Ethylene Oxide handling ?",
        "answers": [
          {
            "text": "PVC Hand Gloves",
            "correct": false
          },
          {
            "text": "Nitrile rubber Hand gloves",
            "correct": true
          },
          {
            "text": "Cotton Hand gloves",
            "correct": false
          },
          {
            "text": "Lather Hand gloves",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Nitrile rubber Hand gloves",
          "Cotton Hand gloves"
        ]
      },
      {
        "id": 138,
        "question": "In PIPA, The consolidated list of credible scenario identified by the team shall be reviewed and finalized  by ",
        "answers": [
          {
            "text": "HSEF department ",
            "correct": false
          },
          {
            "text": "Fire Department",
            "correct": false
          },
          {
            "text": "Respective plant Manager and Fire Chief.",
            "correct": true
          },
          {
            "text": "All the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Respective plant Manager and Fire Chief.",
          "Fire Department"
        ]
      },
      {
        "id": 139,
        "question": "Why do we define maximum inventories of chemical in PT documents?",
        "answers": [
          {
            "text": "To avoid production loss. ",
            "correct": false
          },
          {
            "text": " To avoid emergencies/process upset",
            "correct": false
          },
          {
            "text": "To generate revenue",
            "correct": false
          },
          {
            "text": "So the maximum risk is controlled and emergency response is prepared accordingly.",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "So the maximum risk is controlled and emergency response is prepared accordingly.",
          "To avoid production loss. "
        ]
      },
      {
        "id": 140,
        "question": "Recently RIL HMD has taken License for Hydrogen Filling - where this facility is located",
        "answers": [
          {
            "text": "PE 1 ",
            "correct": true
          },
          {
            "text": "PE 2",
            "correct": false
          },
          {
            "text": "CRACKER",
            "correct": false
          },
          {
            "text": "PP",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "PE 1 ",
          "CRACKER"
        ]
      },
      {
        "id": 141,
        "question": "SMPV Rules means",
        "answers": [
          {
            "text": "Static Mobile Pressure Vessel Rules",
            "correct": false
          },
          {
            "text": "Static Mobile Pressurised Vessel Rules",
            "correct": false
          },
          {
            "text": "Static and Mobile Pressure Vessels (Unfired) Rules",
            "correct": true
          },
          {
            "text": "Static and Mobile Pressure Vessels (Fired) Rules",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Static and Mobile Pressure Vessels (Unfired) Rules",
          "Static and Mobile Pressure Vessels (Fired) Rules"
        ]
      },
      {
        "id": 1,
        "question": "Separation Distances between block/facilities are mentioned in",
        "answers": [
          {
            "text": "OISD 119 Table 1",
            "correct": false
          },
          {
            "text": "OISD 118 Table 2",
            "correct": false
          },
          {
            "text": "OISD 118 Table 1 ",
            "correct": true
          },
          {
            "text": "OISD 117 Table 1",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "OISD 118 Table 1 ",
          "OISD 119 Table 1"
        ]
      },
      {
        "id": 2,
        "question": "What is the safe working criteria for better ventilation in confined space w.r.t air replacement ? ",
        "answers": [
          {
            "text": "4 times of total volume in one hours ",
            "correct": false
          },
          {
            "text": "6 times of total volume in one hours",
            "correct": true
          },
          {
            "text": "3 times of total volume in one hours",
            "correct": false
          },
          {
            "text": "8 times of total volume in one hours",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "6 times of total volume in one hours",
          "4 times of total volume in one hours "
        ]
      },
      {
        "id": 3,
        "question": "At what load deflection test of over head hoisting system shall be done ?",
        "answers": [
          {
            "text": " At rated load(SWL) ",
            "correct": true
          },
          {
            "text": "1.5 times the rated load(SWL)",
            "correct": false
          },
          {
            "text": " 2.0 times the rated load(SWL)",
            "correct": false
          },
          {
            "text": "2.5 times the rated load(SWL)",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " At rated load(SWL) ",
          " 2.0 times the rated load(SWL)"
        ]
      },
      {
        "id": 4,
        "question": "Separation Distances between Storage Tank within a Dyke are mentioned in",
        "answers": [
          {
            "text": "OISD 118 Table 1",
            "correct": false
          },
          {
            "text": "OISD 118 Table 4",
            "correct": true
          },
          {
            "text": "OISD 118 Table 2",
            "correct": false
          },
          {
            "text": "OISD 117 Table 3",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "OISD 118 Table 4",
          "OISD 117 Table 3"
        ]
      },
      {
        "id": 5,
        "question": "The warning barrication should be ________________away  from edge of the excavation ",
        "answers": [
          {
            "text": " 3 feet ",
            "correct": false
          },
          {
            "text": "7 feet",
            "correct": false
          },
          {
            "text": " 6 feet",
            "correct": true
          },
          {
            "text": "1 feet",
            "correct": false
          }
        ],
        "fiftyFifty": [
          " 6 feet",
          "7 feet"
        ]
      },
      {
        "id": 6,
        "question": "What is the minimum depth of excavation, when the work at height procedure must be complied ?",
        "answers": [
          {
            "text": "More than 16 feet ",
            "correct": false
          },
          {
            "text": "More than 7 feet",
            "correct": true
          },
          {
            "text": "More than 4 feet",
            "correct": false
          },
          {
            "text": "More than 5 feet",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "More than 7 feet",
          "More than 4 feet"
        ]
      },
      {
        "id": 7,
        "question": "Up to what distance safety net shall be extended out from the open edge of roof or building , as per fragile roof procedure?",
        "answers": [
          {
            "text": "1.5 meter ",
            "correct": false
          },
          {
            "text": "2.0 meter",
            "correct": false
          },
          {
            "text": "2.5 meter",
            "correct": true
          },
          {
            "text": "3.0meter",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "2.5 meter",
          "3.0meter"
        ]
      },
      {
        "id": 8,
        "question": "Monkey ladder cage guard is required , if the monkey ladder length is ________?",
        "answers": [
          {
            "text": "> 2.0 meter length ",
            "correct": false
          },
          {
            "text": "> 2.5 meter length",
            "correct": true
          },
          {
            "text": "> 3.0 meter length",
            "correct": false
          },
          {
            "text": "> 4.0 meter length",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "> 2.5 meter length",
          "> 4.0 meter length"
        ]
      },
      {
        "id": 9,
        "question": "How much area around scaffolding should be barricading during scaffolding erection, dismantling and use?",
        "answers": [
          {
            "text": "1 meter ",
            "correct": false
          },
          {
            "text": "1.5 meter",
            "correct": true
          },
          {
            "text": "2.0 meter",
            "correct": false
          },
          {
            "text": "1.8 meter",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "1.5 meter",
          "1 meter "
        ]
      },
      {
        "id": 10,
        "question": "Recently RIL -HMD has taken license for Hydrogen Filling facility - It is covered under which regulation",
        "answers": [
          {
            "text": "Gas Cylinder Rule Form E ",
            "correct": true
          },
          {
            "text": "Gas Cylinder Rule Form F",
            "correct": false
          },
          {
            "text": "SMPV Rule 19",
            "correct": false
          },
          {
            "text": "Gas Cylinder Rule EF",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Gas Cylinder Rule Form E ",
          "Gas Cylinder Rule Form F"
        ]
      },
      {
        "id": 11,
        "question": "Allowable CO content in respirator air is __________",
        "answers": [
          {
            "text": "1000 ppm max ",
            "correct": false
          },
          {
            "text": "10 ppm max",
            "correct": true
          },
          {
            "text": "20 ppm max",
            "correct": false
          },
          {
            "text": "500 ppm max",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "10 ppm max",
          "500 ppm max"
        ]
      },
      {
        "id": 12,
        "question": "In Risk Register, out of mentioned barrier family, which barrier is not Mitigative Barrier ?",
        "answers": [
          {
            "text": "Secondary containment (Bund, Dyke etc)",
            "correct": false
          },
          {
            "text": "Emergency Response System (UPS etc)",
            "correct": false
          },
          {
            "text": "F&G Detectors, Sprinkler System",
            "correct": false
          },
          {
            "text": "Process Control System (BPCS etc)",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Process Control System (BPCS etc)",
          "F&G Detectors, Sprinkler System"
        ]
      },
      {
        "id": 13,
        "question": "With Respect to Petroleum Rules \"Petroleum in bulk\u201d means",
        "answers": [
          {
            "text": "Petroleum contained in a tank above 500 Lit Capacity",
            "correct": false
          },
          {
            "text": "Petroleum contained in a tank above 1000 Lit Capacity",
            "correct": false
          },
          {
            "text": "Petroleum contained in a tank irrespective of the quantity of petroleum contained ",
            "correct": true
          },
          {
            "text": "Petroleum contained in a tank above 100 Lit Capacity",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Petroleum contained in a tank irrespective of the quantity of petroleum contained ",
          "Petroleum contained in a tank above 500 Lit Capacity"
        ]
      },
      {
        "id": 14,
        "question": "Lanyards and lifeline of full body harness should not be made of which material ?",
        "answers": [
          {
            "text": "Polypropylene ",
            "correct": true
          },
          {
            "text": "Manila",
            "correct": false
          },
          {
            "text": " Nylon",
            "correct": false
          },
          {
            "text": "Polyester",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Polypropylene ",
          "Polyester"
        ]
      },
      {
        "id": 15,
        "question": " A structure that supports the sides of an excavation and protects against cave \u2013in is called--- ",
        "answers": [
          {
            "text": "Shoring ",
            "correct": true
          },
          {
            "text": "Sloping",
            "correct": false
          },
          {
            "text": "Angle of support",
            "correct": false
          },
          {
            "text": " none of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Shoring ",
          "Angle of support"
        ]
      },
      {
        "id": 16,
        "question": "Cutting of the edge back in inclined manner that it will not slide in the trench or excavated area.\u00a0",
        "answers": [
          {
            "text": "Shoring ",
            "correct": false
          },
          {
            "text": "Sloping",
            "correct": true
          },
          {
            "text": "Angle of support",
            "correct": false
          },
          {
            "text": " none of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Sloping",
          " none of the above"
        ]
      },
      {
        "id": 17,
        "question": "Who is responsible for ensuring drain & isolation facility provision in new projects?",
        "answers": [
          {
            "text": "Project Manager ",
            "correct": true
          },
          {
            "text": "Construction Manager",
            "correct": false
          },
          {
            "text": "HOD-CTS",
            "correct": false
          },
          {
            "text": "Safety Head",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Project Manager ",
          "Construction Manager"
        ]
      },
      {
        "id": 18,
        "question": "Minimum Qualification for Competent persons under Section 36 - Factories Act 1948",
        "answers": [
          {
            "text": "Bachelor Degree in Chemistry or Degree in Chemical Engineering with 5 Years of experience",
            "correct": false
          },
          {
            "text": "Mater Degree in Chemistry or a Degree in Chemical Engineering with 5 years of experience",
            "correct": false
          },
          {
            "text": "Bachelor Degree in Chemistry or Degree in Chemical Engineering with 7 Years of experience",
            "correct": false
          },
          {
            "text": "Mater Degree in Chemistry or a Degree in Chemical Engineering with 7 years of experience",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "Mater Degree in Chemistry or a Degree in Chemical Engineering with 7 years of experience",
          "Bachelor Degree in Chemistry or Degree in Chemical Engineering with 7 Years of experience"
        ]
      },
      {
        "id": 19,
        "question": "What form to be required for certification of pressure vessel as  per Gujarat factory rules 61",
        "answers": [
          {
            "text": "Form 9",
            "correct": false
          },
          {
            "text": "Form 10",
            "correct": false
          },
          {
            "text": "Form 11",
            "correct": true
          },
          {
            "text": "Form 12",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Form 11",
          "Form 12"
        ]
      },
      {
        "id": 20,
        "question": "Filling of any cylinder (except sample bombs) in plant is not allowed without proper permission and license from Department of ----",
        "answers": [
          {
            "text": " Fire  ",
            "correct": false
          },
          {
            "text": "PESO",
            "correct": true
          },
          {
            "text": "HSEF",
            "correct": false
          },
          {
            "text": "CES",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "PESO",
          "HSEF"
        ]
      },
      {
        "id": 21,
        "question": "Under which section certificate of competent person is required for entering in confined space jobs.",
        "answers": [
          {
            "text": "Section 34",
            "correct": false
          },
          {
            "text": "Section 35",
            "correct": false
          },
          {
            "text": "Section 36",
            "correct": true
          },
          {
            "text": "Section 42",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Section 36",
          "Section 35"
        ]
      },
      {
        "id": 22,
        "question": "As per UN Classification Class 1 product is ________.",
        "answers": [
          {
            "text": "Corrosive",
            "correct": false
          },
          {
            "text": "Flammable",
            "correct": false
          },
          {
            "text": "Explosive",
            "correct": true
          },
          {
            "text": "Toxic",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Explosive",
          "Flammable"
        ]
      },
      {
        "id": 23,
        "question": "As per UN Classification Class 9 product is ________.",
        "answers": [
          {
            "text": "Flammable gas",
            "correct": false
          },
          {
            "text": "Miscellaneous substance",
            "correct": true
          },
          {
            "text": "Oxidizing Agent",
            "correct": false
          },
          {
            "text": "Flammable liquid",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Miscellaneous substance",
          "Flammable gas"
        ]
      },
      {
        "id": 24,
        "question": "What is the Lost work case frequency Rate ?",
        "answers": [
          {
            "text": "Lost work case divided by total millions of man hours",
            "correct": true
          },
          {
            "text": "Lost work case divided by contractor millions man hours",
            "correct": false
          },
          {
            "text": "Lost work case divided by RIL millions man hours",
            "correct": false
          },
          {
            "text": "Lost work case divided by total man hours.",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Lost work case divided by total millions of man hours",
          "Lost work case divided by RIL millions man hours"
        ]
      },
      {
        "id": 25,
        "question": "As per UN Classification Class 8 product is ________.",
        "answers": [
          {
            "text": "Flammable gas",
            "correct": false
          },
          {
            "text": "Corrosive",
            "correct": true
          },
          {
            "text": "Explosive",
            "correct": false
          },
          {
            "text": "Toxic",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Corrosive",
          "Explosive"
        ]
      },
      {
        "id": 26,
        "question": "The TLV of Butadiene is ______ .",
        "answers": [
          {
            "text": "1 ppm",
            "correct": false
          },
          {
            "text": "2 ppm",
            "correct": true
          },
          {
            "text": "3 ppm",
            "correct": false
          },
          {
            "text": "4 ppm",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "2 ppm",
          "1 ppm"
        ]
      },
      {
        "id": 27,
        "question": "The TLV of Ethylene Oxide is",
        "answers": [
          {
            "text": "1 ppm",
            "correct": true
          },
          {
            "text": "2 ppm",
            "correct": false
          },
          {
            "text": "3 ppm",
            "correct": false
          },
          {
            "text": "4 ppm",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "1 ppm",
          "4 ppm"
        ]
      },
      {
        "id": 28,
        "question": "RIL HMD Ownership Cross country Pipeline carries which material currently",
        "answers": [
          {
            "text": "Naphtha - PX  ",
            "correct": false
          },
          {
            "text": "Naphtha -PX - WATER",
            "correct": true
          },
          {
            "text": "PX - Naphtha - Ethane",
            "correct": false
          },
          {
            "text": "Naphtha - Water - NG",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Naphtha -PX - WATER",
          "PX - Naphtha - Ethane"
        ]
      },
      {
        "id": 29,
        "question": "What is the Explosive range (LEL-UEL) of Ethylene Oxide ?",
        "answers": [
          {
            "text": "1.0 & to 10 %",
            "correct": false
          },
          {
            "text": "1.5% to 75%",
            "correct": false
          },
          {
            "text": "3.0 % to 100 %",
            "correct": true
          },
          {
            "text": "Non of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "3.0 % to 100 %",
          "1.5% to 75%"
        ]
      },
      {
        "id": 30,
        "question": "What is minimum ignition energy required for Hydrogen Gas ?",
        "answers": [
          {
            "text": "0.02 j",
            "correct": false
          },
          {
            "text": "2.0 mj",
            "correct": false
          },
          {
            "text": "0.02 mj",
            "correct": true
          },
          {
            "text": "20 mj",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "0.02 mj",
          "0.02 j"
        ]
      },
      {
        "id": 31,
        "question": "What is minimum ignition energy required for Ethylene Oxide ?",
        "answers": [
          {
            "text": "0.078 mj",
            "correct": false
          },
          {
            "text": "1.50 mj",
            "correct": false
          },
          {
            "text": "30 mj",
            "correct": false
          },
          {
            "text": "0.087 mj",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "0.087 mj",
          "0.078 mj"
        ]
      },
      {
        "id": 32,
        "question": "In any process which of following may cause generation of static electricity ?",
        "answers": [
          {
            "text": "Splashing of chemical",
            "correct": false
          },
          {
            "text": "High velocity flow",
            "correct": false
          },
          {
            "text": "Agitation at high speed",
            "correct": false
          },
          {
            "text": "All of the above",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All of the above",
          "High velocity flow"
        ]
      },
      {
        "id": 33,
        "question": "Expansion ratio of LPG from liquid phase to vapour phase is",
        "answers": [
          {
            "text": "200 ",
            "correct": false
          },
          {
            "text": 20,
            "correct": false
          },
          {
            "text": 250,
            "correct": true
          },
          {
            "text": 1400,
            "correct": false
          }
        ],
        "fiftyFifty": [
          250,
          "200 "
        ]
      },
      {
        "id": 34,
        "question": "Expansion ratio of water to steam is",
        "answers": [
          {
            "text": "1200 ",
            "correct": false
          },
          {
            "text": 200,
            "correct": false
          },
          {
            "text": 1700,
            "correct": true
          },
          {
            "text": 1450,
            "correct": false
          }
        ],
        "fiftyFifty": [
          1700,
          "1200 "
        ]
      },
      {
        "id": 35,
        "question": "The maximum height for storage tank as per PESO/standards is ",
        "answers": [
          {
            "text": "12.5 meter ",
            "correct": false
          },
          {
            "text": "17 meter",
            "correct": false
          },
          {
            "text": "15 meter",
            "correct": false
          },
          {
            "text": "20 meter",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "20 meter",
          "12.5 meter "
        ]
      },
      {
        "id": 36,
        "question": "For large warehouse protection these type of detectors are used",
        "answers": [
          {
            "text": "Heat ",
            "correct": false
          },
          {
            "text": "Flame",
            "correct": false
          },
          {
            "text": "Beam",
            "correct": true
          },
          {
            "text": "None of the above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Beam",
          "Flame"
        ]
      },
      {
        "id": 37,
        "question": "Hazmat foam is used for",
        "answers": [
          {
            "text": "Vapour suppression ",
            "correct": false
          },
          {
            "text": "Smothering",
            "correct": false
          },
          {
            "text": "Cut off oxygen supply",
            "correct": false
          },
          {
            "text": "All the above",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All the above",
          "Vapour suppression "
        ]
      },
      {
        "id": 38,
        "question": "RIL  Hazira  is  having  Mutual  Aid  agreement  with  the  following  industries",
        "answers": [
          {
            "text": "ONGC ",
            "correct": false
          },
          {
            "text": "NTPC",
            "correct": false
          },
          {
            "text": "KRIBHCO",
            "correct": false
          },
          {
            "text": "All of these",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "All of these",
          "ONGC "
        ]
      },
      {
        "id": 39,
        "question": "The Flammability limit of Hydrogen is",
        "answers": [
          {
            "text": " 2%-10% ",
            "correct": false
          },
          {
            "text": "4%-74%",
            "correct": true
          },
          {
            "text": "1%-44%",
            "correct": false
          },
          {
            "text": " 3%-15%",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "4%-74%",
          " 2%-10% "
        ]
      },
      {
        "id": 40,
        "question": "What  is  the  full  form  of  AFFF  ?",
        "answers": [
          {
            "text": "Aqueous Film Forming Foam ",
            "correct": true
          },
          {
            "text": "Aqua Film Forming Foam",
            "correct": false
          },
          {
            "text": "Aqua Fluro Forming Foam",
            "correct": false
          },
          {
            "text": "None of these",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Aqueous Film Forming Foam ",
          "Aqua Film Forming Foam"
        ]
      },
      {
        "id": 41,
        "question": "How many max minutes before the start-up of the HWP should the Gas test be valid.",
        "answers": [
          {
            "text": "30 Minutes",
            "correct": false
          },
          {
            "text": "45 Minutes",
            "correct": false
          },
          {
            "text": "60 Minutes",
            "correct": true
          },
          {
            "text": "None of above",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "60 Minutes",
          "30 Minutes"
        ]
      },
      {
        "id": 42,
        "question": "Gujarat Factory Rules Form 9 is filled for",
        "answers": [
          {
            "text": "Examination of Hoists & Lift",
            "correct": true
          },
          {
            "text": "Examination of Lifting Tools",
            "correct": false
          },
          {
            "text": "Examination of Centrifuges",
            "correct": false
          },
          {
            "text": "Examination of Monorail",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Examination of Hoists & Lift",
          "Examination of Lifting Tools"
        ]
      },
      {
        "id": 43,
        "question": "Lowest LWCFR Achieved in HMD Last 10 Years",
        "answers": [
          {
            "text": 0.041,
            "correct": false
          },
          {
            "text": 0.053,
            "correct": true
          },
          {
            "text": 0.069,
            "correct": false
          },
          {
            "text": 0.023,
            "correct": false
          }
        ],
        "fiftyFifty": [
          0.053,
          0.041
        ]
      },
      {
        "id": 44,
        "question": "Which OMS Sub Element is not directly related to any of PSM Elements",
        "answers": [
          {
            "text": "1.7 Culture",
            "correct": true
          },
          {
            "text": "8.2 Assurance and Audit",
            "correct": false
          },
          {
            "text": "2.2 People and Competence",
            "correct": false
          },
          {
            "text": "2.4 Organizational Learning",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "1.7 Culture",
          "2.4 Organizational Learning"
        ]
      },
      {
        "id": 45,
        "question": "Benchmark good operating practices from across the RIL Group and/or external sources to identify opportunities for risk reduction and operating performance improvement. - This Group Essential is part of which OMS Sub Element",
        "answers": [
          {
            "text": "3.1 Risk Assessment and Management",
            "correct": false
          },
          {
            "text": "3.3 Process Safety",
            "correct": false
          },
          {
            "text": "2.4 Organizational Learning",
            "correct": true
          },
          {
            "text": "8.3 Performance Review",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "2.4 Organizational Learning",
          "3.1 Risk Assessment and Management"
        ]
      },
      {
        "id": 46,
        "question": "Lowest number of total injury Achieved in HMD Pet Chem in Last 10 Years",
        "answers": [
          {
            "text": "11 in 2021-22",
            "correct": true
          },
          {
            "text": "13 in 2021-22",
            "correct": false
          },
          {
            "text": "18 in 2019-20",
            "correct": false
          },
          {
            "text": "15 in 2019-20",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "11 in 2021-22",
          "18 in 2019-20"
        ]
      },
      {
        "id": 47,
        "question": "As per Gujarat Factory Rules 1963 - On Site Emergency Plan Chapter 7 describes ",
        "answers": [
          {
            "text": "Detail of Process Hazard",
            "correct": false
          },
          {
            "text": "Detail about the Site",
            "correct": false
          },
          {
            "text": "Description of Hazardous Chemical at plant site",
            "correct": true
          },
          {
            "text": "Detail of Liasoning arrangement",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Description of Hazardous Chemical at plant site",
          "Detail of Process Hazard"
        ]
      },
      {
        "id": 48,
        "question": "Fill in the Blanks As per SMPV Rules No. ________ : Relief valves shall be tested by a Competent Person for correct operation at least _____ and a record of such test shall be maintained.",
        "answers": [
          {
            "text": "19, Once in two year",
            "correct": false
          },
          {
            "text": "18, once in a six month",
            "correct": false
          },
          {
            "text": "19, once in a year",
            "correct": false
          },
          {
            "text": "18 , once in a year",
            "correct": true
          }
        ],
        "fiftyFifty": [
          "18 , once in a year",
          "18, once in a six month"
        ]
      },
      {
        "id": 49,
        "question": "As per RIL Specification what shall be composition of IFR Suit used in Reliance ",
        "answers": [
          {
            "text": "93% Nomex  5% Kelver 2% Q140",
            "correct": false
          },
          {
            "text": "93% META ARAMID 5% PARA ARAMID  2% ANTISTATIC ",
            "correct": true
          },
          {
            "text": "92% NOMEX 6% PARA ARAMID  2% ANTISTATIC ",
            "correct": false
          },
          {
            "text": "93% Nomex  5% PARA ARAMID 2% Q140",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "93% META ARAMID 5% PARA ARAMID  2% ANTISTATIC ",
          "93% Nomex  5% Kelver 2% Q140"
        ]
      },
      {
        "id": 50,
        "question": "As per RIL Specifications what shall be weight of Helmet and which is the standard for Helmet",
        "answers": [
          {
            "text": "Weight : 400 GMS ( + or - 20 GMS)   Standard : IS 2925 : 1984 ",
            "correct": true
          },
          {
            "text": "Weight : 400 GMS ( + or - 10 GMS)   Standard : IS 2925 : 1983 ",
            "correct": false
          },
          {
            "text": "Weight : 350 GMS ( + or - 10 GMS)   Standard : IS 2925 : 1983 ",
            "correct": false
          },
          {
            "text": "Weight : 400 GMS ( + or - 30 GMS)   Standard : IS 2925 : 1983 ",
            "correct": false
          }
        ],
        "fiftyFifty": [
          "Weight : 400 GMS ( + or - 20 GMS)   Standard : IS 2925 : 1984 ",
          "Weight : 350 GMS ( + or - 10 GMS)   Standard : IS 2925 : 1983 "
        ]
      }
    ];

const prizeMoney = [
  { id: 1, amount: "Suraksha Sadhak" },
  { id: 2, amount: "Suraksha Jigyasu" },
  { id: 3, amount: "Suraksha Pathik" },
  { id: 4, amount: "Suraksha Upasak" },
  { id: 5, amount: "Suraksha Samarthak" },
  { id: 6, amount: "Suraksha Gyaani" },
  { id: 7, amount: "Suraksha Vishleshak" },
  { id: 8, amount: "Suraksha Margdarshak" },
  { id: 9, amount: "Suraksha Prabhari" },
  { id: 10, amount: "Suraksha Shreshtha" },
  { id: 11, amount: "Suraksha Mahanayak" },
  { id: 12, amount: "Suraksha Vidwan" },
  { id: 13, amount: "Suraksha Ratna" },
  { id: 14, amount: "Suraksha Mahaguru" },
  { id: 15, amount: "Suraksha Adhipati" }
].reverse();

export { prizeMoney, data };

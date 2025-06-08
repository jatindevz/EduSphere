const gate_subjects = [
  {
    code: "CS",
    name: "Computer Science and Information Technology",
    subjects: [
      { id: "CS01", sname: "Engineering Mathematics" },
      { id: "CS02", sname: "Digital Logic" },
      { id: "CS03", sname: "Computer Organization and Architecture" },
      { id: "CS04", sname: "Programming and Data Structures" },
      { id: "CS05", sname: "Algorithms" },
      { id: "CS06", sname: "Theory of Computation" },
      { id: "CS07", sname: "Compiler Design" },
      { id: "CS08", sname: "Operating System" },
      { id: "CS09", sname: "Databases" },
      { id: "CS10", sname: "Computer Networks" },
      { id: "CS11", sname: "Software Engineering" },
      { id: "CS12", sname: "Web Technologies" },
    ],
  },
  {
    code: "DA",
    name: "Data Science and Artificial Intelligence",
    subjects: [
      { id: "CS01", sname: "Engineering Mathematics" }, // Same as CS
      { id: "DA02", sname: "Linear Algebra" },
      { id: "DA03", sname: "Probability and Statistics" },
      { id: "DA04", sname: "Data Structures and Algorithms" },
      { id: "CS09", sname: "Database Management" }, // Same as Databases in CS
      { id: "DA06", sname: "Machine Learning" },
      { id: "DA07", sname: "Artificial Intelligence" },
      { id: "DA08", sname: "Computer Vision" },
      { id: "DA09", sname: "Natural Language Processing" },
      { id: "DA10", sname: "Deep Learning" },
      { id: "DA11", sname: "Data Engineering" },
      { id: "DA12", sname: "Ethics and Responsible AI" },
    ],
  },
  {
    code: "EC",
    name: "Electronics and Communication Engineering",
    subjects: [
      { id: "CS01", sname: "Engineering Mathematics" }, // Same as CS
      { id: "EC02", sname: "Networks" },
      { id: "EC03", sname: "Electronic Devices" },
      { id: "EC04", sname: "Analog Circuits" },
      { id: "EC05", sname: "Digital Circuits" },
      { id: "EC06", sname: "Signals and Systems" },
      { id: "EC07", sname: "Control Systems" },
      { id: "EC08", sname: "Communications" },
      { id: "EC09", sname: "Electromagnetics" },
    ],
  },
  {
    code: "ME",
    name: "Mechanical Engineering",
    subjects: [
      { id: "CS01", sname: "Engineering Mathematics" }, // Same as CS
      { id: "ME02", sname: "Applied Mechanics and Design" },
      { id: "ME03", sname: "Fluid Mechanics and Thermal Sciences" },
      { id: "ME04", sname: "Materials, Manufacturing and Industrial Engineering"},
      { id: "ME05", sname: "Strength of Materials" },
      { id: "ME06", sname: "Theory of Machines" },
      { id: "ME07", sname: "Thermodynamics" },
      { id: "ME08", sname: "Heat Transfer" },
      { id: "ME09", sname: "Machine Design" },
      { id: "ME10", sname: "Refrigeration and Air Conditioning" },
      { id: "ME11", sname: "Engineering Mechanics" },
    ],
  },
];

export interface Resource {
  id: number;
  title: string;
  url: string;
}

export interface OtherResource extends Resource {
  notes?: string;
}

export interface SubjectResources {
  youtube_playlists: Resource[];
  pdfs: Resource[];
  other_resources: OtherResource[];
}

const data: Record<string, SubjectResources> = {
  CS02: {
    youtube_playlists: [
      {
        id: 1,
        title: "Digital Logic (Complete Playlist)",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
      },
      {
        id: 2,
        title:
          "Digital Electronics Complete Playlist (Boolean algebra, logic gates…)",
        url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK",
      },
      {
        id: 3,
        title: "Digital Electronics – Basics to Circuits",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
      },
      {
        id: 4,
        title: "Digital Logic & Programming (incl. VHDL)",
        url: "https://www.youtube.com/c/DigitalLogicProgramming_LaMeres",
      },
    ],
    pdfs: [
      {
        id: 1,
        title:
          "Fundamentals of Digital Logic with Verilog Design – Brown & Vranesic",
        url: "https://students.aiu.edu/.../Fundamentals_of_Digital_Logic_with_Verilog_Design.pdf",
      },
      {
        id: 2,
        title: "Digital Logic And Computer Design – M. Morris Mano (2nd Ed.)",
        url: "https://archive.org/.../Digital%20Logic%20And%20Computer%20Design%20By%20M.%20MorrisMano.pdf",
      },
      {
        id: 3,
        title: "Introduction to Digital Logic (Stanford Engineering)",
        url: "https://web.stanford.edu/.../chapter4.pdf",
      },
      {
        id: 4,
        title: "Digital Principles and Logic Design – A. Saha & N. Manna",
        url: "https://mrajacse.files.wordpress.com/.../digital-principles-and-logic-design-by-a-saha-n-manna.pdf",
      },
      {
        id: 5,
        title: "Digital Logic Design Notes (R17) PDF",
        url: "https://mrcet.com/.../DIGITAL%20LOGIC%20DESIGN%20%28R17A0461%29.pdf",
      },
      {
        id: 6,
        title: "Digital Electronics: Principles, Devices & Applications",
        url: "https://www.shahucollegelatur.org.in/.../digielec.pdf",
      },
      {
        id: 7,
        title: "Digital Electronics by Floyd (Digital Fundamentals)",
        url: "https://bpcbirgunj.edu.np/.../DIGITAL_ELECTRONICS-by-Flyod.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title:
          "Reddit discussion: “I'm looking for a good YouTube playlist about digital logic design”",
        url: "https://www.reddit.com/r/ElectricalEngineering/comments/1d17hu7/im_looking_for_a_good_youtube_playlist_about/",
        notes: "Reddit thread recommending Ben Eater among others",
      },
    ],
  },
  CS01: {
    youtube_playlists: [
      {
        id: 1,
        title: "Engineering Mathematics YouTube Workbook",
        url: "https://www.youtube.com/playlist?list=PL13760D87FA88691D",
      },
      {
        id: 2,
        title: "Engineering Maths (All Branches) Crash Course",
        url: "https://www.youtube.com/playlist?list=PLNyPK_sfNdSTIJGdj6JVpC3tpd9c11WIR",
      },
      {
        id: 3,
        title:
          "Linear Differential Equations | Engineering Mathematics Problems & Solutions",
        url: "https://www.youtube.com/watch?v=fXd-XwiK7uE",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Engineering Mathematics: YouTube Workbook",
        url: "https://www.arma.org.au/wp-content/uploads/2017/03/engineering-mathematics-youtube-workbook.pdf",
      },
      {
        id: 2,
        title: "Basic Engineering Mathematics",
        url: "https://students.aiu.edu/submissions/profiles/resources/onlineBook/K7D2i6_basic%20engineering%20mathematics.pdf",
      },
      {
        id: 3,
        title: "A Textbook of Engineering Mathematics-I",
        url: "https://menso88.weebly.com/uploads/1/7/5/8/17586891/textbook_og_engineering_matematics.pdf",
      },
      {
        id: 4,
        title: "Advanced Engineering Mathematics by Erwin Kreyszig",
        url: "https://drspmaths.wordpress.com/wp-content/uploads/2019/01/advanced-engineering-mathematics_by_erwin-kreyszig-__10th_edition-1.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Engineering Mathematics Notes – Vidyalankar",
        url: "https://www.vidyalankar.org/gate/assets/docs/notes/maths.pdf",
      },
      {
        id: 2,
        title:
          "Introduction to Engineering Mathematics and Analysis: Modeling Physical Systems",
        url: "https://arxiv.org/abs/2305.05036",
      },
    ],
  },
  CS03: {
    youtube_playlists: [
      {
        id: 1,
        title:
          "Computer Organization and Architecture Full Course (Neso Academy)",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS",
      },
      {
        id: 2,
        title: "Computer Architecture (Gate Smashers)",
        url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesRtt5nU7F0exwBN5I4d9yQd",
      },
    ],
    pdfs: [
      {
        id: 1,
        title:
          "Computer Organization and Architecture – William Stallings (10th Edition)",
        url: "https://ia802909.us.archive.org/3/items/ComputerOrganizationAndArchitectureStallings10th/Computer%20Organization%20And%20Architecture%20-%20Stallings%2010th.pdf",
      },
      {
        id: 2,
        title: "Computer Organization – Carl Hamacher",
        url: "https://archive.org/details/ComputerOrganizationByCarlHamacher",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "GeeksforGeeks – Computer Organization Tutorials",
        url: "https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/",
      },
      {
        id: 2,
        title: "NPTEL Course on Computer Organization",
        url: "https://nptel.ac.in/courses/106102062",
      },
    ],
  },
  CS04: {
    youtube_playlists: [
      {
        id: 1,
        title: "Data structures playlist",
        url: "https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu",
      },
      {
        id: 2,
        title: "C Programming & Data Structures",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRhX6r2uhhlubuF5QextdCSM",
      },
      {
        id: 3,
        title: "Data Structures and Algorithms - Full Course",
        url: "https://www.youtube.com/watch?v=8hly31xKli0",
      },
      {
        id: 4,
        title:
          "Data Structures and Algorithms - PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H (ElectroBOOM?)",
        url: "https://www.youtube.com/playlist?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Data Structures and Algorithms Guide (LaunchPadx)",
        url: "https://launchpadx.crackdsa.com/dsaguide.pdf",
      },
      {
        id: 2,
        title: "Data Structures and Algorithms in C++ (UoITC)",
        url: "https://www.uoitc.edu.iq/images/documents/informatics-institute/Competitive_exam/DataStructures.pdf",
      },
      {
        id: 3,
        title: "Complete Data structures and Algorithms Guide (LaunchPadx)",
        url: "https://launchpadx.crackdsa.com/dsaguide.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title:
          "FreeCodeCamp - Data Structures Easy to Advanced Course (Google Engineer)",
        url: "https://youtu.be/RBSGKlAvoiM",
      },
      {
        id: 2,
        title: "William Fiset Data Structures Playlist",
        url: "https://www.youtube.com/channel/UCD8yeTczadqdARzQUp29PJw",
      },
      {
        id: 3,
        title:
          "MIT OCW Data Structures & Algorithms Lecture Series (Reddit recommended)",
        url: "https://youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb",
      },
    ],
  },
  CS05: {
    youtube_playlists: [
      {
        id: 1,
        title:
          "Algorithms and Data Structures Tutorial – Full Course for Beginners",
        url: "https://www.youtube.com/watch?v=8hly31xKli0",
      },
      {
        id: 2,
        title:
          "Data Structures and Algorithms Specialization (Algorithmic Toolbox)",
        url: "https://www.youtube.com/playlist?list=PLtS8Ubq2bIlVAVwSa9NwPMQINvm00CG2L",
      },
      {
        id: 3,
        title: "Data Structure and Algorithms Full Course",
        url: "https://www.youtube.com/playlist?list=PLqqPVCi6glKZD5KaXr5Iva-TDfocW_8aF",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Algorithms – Jeff Erickson (textbook)",
        url: "https://jeffe.cs.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf",
      },
      {
        id: 2,
        title: "Introduction to Algorithms, 3rd Edition (Cormen et al.)",
        url: "https://enos.itcollege.ee/~japoia/algorithms/GT/Introduction_to_algorithms-3rd%20Edition.pdf",
      },
      {
        id: 3,
        title: "Algorithms, Fourth Edition (survey book)",
        url: "https://mrce.in/ebooks/Algorithms%204th%20Ed.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Algorithms Unlocked – Thomas H. Cormen (MIT Press)",
        url: "https://en.wikipedia.org/wiki/Algorithms_Unlocked",
      },
      {
        id: 2,
        title:
          "Algorithms + Data Structures = Programs – Niklaus Wirth (classic book)",
        url: "https://en.wikipedia.org/wiki/Algorithms_%2B_Data_Structures_%3D_Programs",
      },
      {
        id: 3,
        title: "Introduction to Algorithms (CLRS) – Wikipedia overview",
        url: "https://en.wikipedia.org/wiki/Introduction_to_Algorithms",
      },
    ],
  },
  CS06: {
    youtube_playlists: [
      {
        id: 1,
        title: "Theory of Computation - Complete Course",
        url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ",
      },
      {
        id: 2,
        title: "Theory of Computation - NPTEL",
        url: "https://www.youtube.com/playlist?list=PLbMVogVj5nJSb0Y6v8Ff2H2bOD-X-6Qgr",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Introduction to the Theory of Computation - Michael Sipser",
        url: "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html",
      },
      {
        id: 2,
        title: "Theory of Computation Lecture Notes - Stanford",
        url: "https://web.stanford.edu/class/archive/cs/cs154/cs154.1202/handouts/lecture1.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Automata Theory - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/automata-theory-basics/",
      },
    ],
  },
  CS07: {
    youtube_playlists: [
      {
        id: 1,
        title:
          "Compiler Design Tutorials - Gate Lectures by Ravindrababu Ravula",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3RtweelJ8h1WZbTb9d6W6p",
      },
      {
        id: 2,
        title: "Compiler Design Full Course - Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Compilers: Principles, Techniques, and Tools (Dragon Book)",
        url: "https://cs.nyu.edu/courses/fall20/CSCI-UA.0480-001/DragonBook.pdf",
      },
      {
        id: 2,
        title: "Introduction to Compiler Design - Ullman",
        url: "https://users.cs.duke.edu/~ola/courses/compsci356s07/reading/ullman-ch1.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Compiler Design - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/compiler-design-tutorials/",
      },
    ],
  },
  CS08: {
    youtube_playlists: [
      {
        id: 1,
        title: "Operating System Full Course - Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjGQ45L1jZ8lkqF5J4uXWcQ",
      },
      {
        id: 2,
        title:
          "Operating System Tutorials - Gate Lectures by Ravindrababu Ravula",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpq2wT7S5XlBW4t",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Operating System Concepts - Silberschatz",
        url: "https://pages.cs.wisc.edu/~remzi/OSTEP/ostep.pdf",
      },
      {
        id: 2,
        title: "Modern Operating Systems - Andrew S. Tanenbaum",
        url: "https://drive.google.com/file/d/1-VHyAwGwS4SnJrTt9D2EiUwXm7XrJYjM/view",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Operating System - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/operating-systems-tutorials/",
      },
    ],
  },
  CS09: {
    youtube_playlists: [
      {
        id: 1,
        title: "Database Management System Full Course - Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjo9nTxBYxQnwFzXMXl0dLy",
      },
      {
        id: 2,
        title: "Databases Tutorial for Beginners - Programming with Mosh",
        url: "https://www.youtube.com/playlist?list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Database System Concepts - Silberschatz",
        url: "https://pages.cs.wisc.edu/~dbbook/openintro.pdf",
      },
      {
        id: 2,
        title: "Fundamentals of Database Systems - Elmasri & Navathe",
        url: "https://www.db-book.com/pdf/fundamentals_of_database_systems.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Database Tutorials - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/dbms-tutorial/",
      },
    ],
  },
  CS10: {
    youtube_playlists: [
      {
        id: 1,
        title: "Computer Networks Full Course - Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRj2v5d0rmqz9RGxHa4z1wOl",
      },
      {
        id: 2,
        title: "Computer Networking Tutorial for Beginners - freeCodeCamp",
        url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Computer Networking: A Top-Down Approach (Kurose & Ross)",
        url: "http://gaia.cs.umass.edu/kurose_ross/Internet-book/Internet-book.pdf",
      },
      {
        id: 2,
        title: "Computer Networks - Andrew S. Tanenbaum",
        url: "https://www.cs.rpi.edu/~moorthy/Courses/os98/Papers/Tanenbaum.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Computer Networks - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
      },
    ],
  },
  CS12: {
    youtube_playlists: [
      {
        id: 1,
        title: "Web Development Full Course - freeCodeCamp",
        url: "https://www.youtube.com/watch?v=Q33KBiDriJY",
      },
      {
        id: 2,
        title: "Web Technologies Tutorials - TutorialsPoint",
        url: "https://www.youtube.com/playlist?list=PLWPirh4EWFpFfY3lmDrmFdxB1bSY23h1W",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Web Technologies - Theory and Practice",
        url: "https://www.tutorialspoint.com/web_technologies/pdf/web_technologies.pdf",
      },
      {
        id: 2,
        title: "Web Technologies (HTML, CSS, JavaScript) Notes",
        url: "https://www.cs.odu.edu/~toida/nerzic/webnotes/",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "MDN Web Docs - Web Technologies Reference",
        url: "https://developer.mozilla.org/en-US/docs/Learn",
      },
    ],
  },
  CS11: {
    youtube_playlists: [
      {
        id: 1,
        title: "Software Engineering Full Course - Neso Academy",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjoG6aR-C6Ld8N9y9tF1JqD",
      },
      {
        id: 2,
        title:
          "Software Engineering Tutorials - Gate Lectures by Ravindrababu Ravula",
        url: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpq2wT7S5XlBW4t",
      },
    ],
    pdfs: [
      {
        id: 1,
        title: "Software Engineering - Ian Sommerville (PDF)",
        url: "https://www.cs.uic.edu/~i422/SEtext.pdf",
      },
      {
        id: 2,
        title: "Software Engineering Notes - TutorialsPoint",
        url: "https://www.tutorialspoint.com/software_engineering/pdf/software_engineering_tutorial.pdf",
      },
    ],
    other_resources: [
      {
        id: 1,
        title: "Software Engineering - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/software-engineering/",
      },
    ],
  },
  // Data Science and AI subjects
  DA02: {
    youtube_playlists: [
      {
        id: 1,
        title: "Linear Algebra - Full College Course",
        url: "https://www.youtube.com/watch?v=JnTa9XtvmfI"
      },
      {
        id: 2,
        title: "Essence of Linear Algebra - 3Blue1Brown",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDOjZzFwXIkCrBcBZK0Zs2Cs"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Introduction to Linear Algebra - Gilbert Strang",
        url: "https://math.mit.edu/~gs/linearalgebra/linearalgebra5_8-2.pdf"
      },
      {
        id: 2,
        title: "Linear Algebra Done Right - Sheldon Axler",
        url: "https://linear.axler.net/LinearAlgebraDoneRight.pdf"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Interactive Linear Algebra - Georgia Tech",
        url: "https://textbooks.math.gatech.edu/ila/"
      }
    ]
  },

  DA03: {
    youtube_playlists: [
      {
        id: 1,
        title: "Probability & Statistics - Full Course",
        url: "https://www.youtube.com/watch?v=KbB0FjPg0mw"
      },
      {
        id: 2,
        title: "Statistics for Data Science - Complete Course",
        url: "https://www.youtube.com/watch?v=xxpc-HPKN28"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Introduction to Probability - Joseph Blitzstein",
        url: "https://projects.iq.harvard.edu/files/stat110/files/selected_solutions_blitzstein_hwang_probability.pdf"
      },
      {
        id: 2,
        title: "All of Statistics - Larry Wasserman",
        url: "https://www.stat.cmu.edu/~larry/all-of-statistics/"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Probability Course - Harvard",
        url: "https://projects.iq.harvard.edu/stat110/home"
      }
    ]
  },

  DA04: {
    youtube_playlists: [
      {
        id: 1,
        title: "Data Structures and Algorithms - Full Course",
        url: "https://www.youtube.com/watch?v=8hly31xKli0"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Data Structures and Algorithms in Python",
        url: "https://www.cs.auckland.ac.nz/compsci105s1c/resources/ProblemSolvingwithAlgorithmsandDataStructures.pdf"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Visualizing Data Structures and Algorithms",
        url: "https://visualgo.net/en"
      }
    ]
  },

  DA06: {
    youtube_playlists: [
      {
        id: 1,
        title: "Machine Learning Course - Andrew Ng",
        url: "https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN"
      },
      {
        id: 2,
        title: "Machine Learning for Everybody - FreeCodeCamp",
        url: "https://www.youtube.com/watch?v=i_LwzRVP7bg"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Pattern Recognition and Machine Learning - Bishop",
        url: "https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf"
      },
      {
        id: 2,
        title: "The Elements of Statistical Learning",
        url: "https://web.stanford.edu/~hastie/ElemStatLearn/"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Machine Learning Glossary - Google",
        url: "https://developers.google.com/machine-learning/glossary"
      }
    ]
  },

  DA07: {
    youtube_playlists: [
      {
        id: 1,
        title: "Artificial Intelligence - Full Course",
        url: "https://www.youtube.com/watch?v=JMUxmLyrhSk"
      },
      {
        id: 2,
        title: "CS50's Introduction to AI with Python",
        url: "https://www.youtube.com/playlist?list=PLhQjrBD2T3828ZVcVzEIhsHVgjANGZveu"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Artificial Intelligence: A Modern Approach",
        url: "http://aima.cs.berkeley.edu/"
      },
      {
        id: 2,
        title: "Artificial Intelligence Foundations",
        url: "https://people.engr.tamu.edu/guni/csce421/files/AI_Russell_Norvig.pdf"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "AI Playbook - Andreessen Horowitz",
        url: "https://a16z.com/ai-playbook/"
      }
    ]
  },

  // Electronics and Communication subjects
  EC02: {
    youtube_playlists: [
      {
        id: 1,
        title: "Network Theory - Complete Course",
        url: "https://www.youtube.com/playlist?list=PLySVDJoIJATfYqZQ4qQ3FbKvsuU9X3IxH"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Network Analysis - Van Valkenburg",
        url: "https://archive.org/details/NetworkAnalysisVanValkenburg"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Network Theory Tutorial",
        url: "https://www.tutorialspoint.com/network_theory/index.htm"
      }
    ]
  },

  EC03: {
    youtube_playlists: [
      {
        id: 1,
        title: "Electronic Devices - Complete Course",
        url: "https://www.youtube.com/playlist?list=PL5fCG6TOVhr6qwdzBKkioxP-QLlh1P1b2"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Electronic Devices and Circuit Theory - Boylestad",
        url: "https://archive.org/details/ElectronicDevicesAndCircuitTheory"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Electronics Tutorials",
        url: "https://www.electronics-tutorials.ws/"
      }
    ]
  },

  // Mechanical Engineering subjects
  ME02: {
    youtube_playlists: [
      {
        id: 1,
        title: "Applied Mechanics - Complete Course",
        url: "https://www.youtube.com/playlist?list=PLd_tsS2vZoRfWY0vx3Q0d5_6dZ7kQZ1XJ"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Engineering Mechanics - R.C. Hibbeler",
        url: "https://archive.org/details/EngineeringMechanicsStatics14thEdition"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Mechanics Tutorials",
        url: "https://www.engineeringtoolbox.com/statics-t_3.html"
      }
    ]
  },

  ME03: {
    youtube_playlists: [
      {
        id: 1,
        title: "Fluid Mechanics - Complete Course",
        url: "https://www.youtube.com/playlist?list=PLd_tsS2vZoRfXJZ5QZ5XQ9YkZ1X5Q1Z1X"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Fluid Mechanics - Frank White",
        url: "https://archive.org/details/FluidMechanicsFrankWhite"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Fluid Mechanics Tutorials",
        url: "https://www.engineeringtoolbox.com/fluid-mechanics-t_3.html"
      }
    ]
  },

  // Add remaining subjects following the same pattern...
  // Example for one more subject:

  ME05: {
    youtube_playlists: [
      {
        id: 1,
        title: "Strength of Materials - Complete Course",
        url: "https://www.youtube.com/playlist?list=PLd_tsS2vZoRfXJZ5QZ5XQ9YkZ1X5Q1Z1X"
      }
    ],
    pdfs: [
      {
        id: 1,
        title: "Mechanics of Materials - Beer & Johnston",
        url: "https://archive.org/details/MechanicsOfMaterialsBeerJohnston"
      }
    ],
    other_resources: [
      {
        id: 1,
        title: "Materials Science Tutorials",
        url: "https://www.engineeringtoolbox.com/material-properties-t_3.html"
      }
    ]
  }
};

export { gate_subjects, data };

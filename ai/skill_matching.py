import json
from sklearn.metrics.pairwise import cosine_similarity


# ============================================================
# QUESTION BANK
# ============================================================

QUESTION_BANK = {

    "python": [
        {
            "question": "Which keyword is used to define a function in Python?",
            "options": ["function", "def", "fun", "define"],
            "answer": "def"
        },
        {
            "question": "Which data type stores multiple values in Python?",
            "options": ["List", "Integer", "Boolean", "Float"],
            "answer": "List"
        },
        {
            "question": "What is the output of len([10, 20, 30])?",
            "options": ["2", "3", "4", "0"],
            "answer": "3"
        },
        {
            "question": "Which symbol is used for comments in Python?",
            "options": ["//", "#", "/*", "--"],
            "answer": "#"
        },
        {
            "question": "Which library is commonly used for numerical computing?",
            "options": ["NumPy", "Django", "Flask", "BeautifulSoup"],
            "answer": "NumPy"
        }
    ],


    "sql": [
        {
            "question": "Which SQL command is used to retrieve data?",
            "options": ["GET", "SELECT", "FETCH", "OPEN"],
            "answer": "SELECT"
        },
        {
            "question": "Which clause filters rows in SQL?",
            "options": ["FILTER", "WHERE", "SEARCH", "IF"],
            "answer": "WHERE"
        },
        {
            "question": "Which command adds a new record?",
            "options": ["ADD", "INSERT", "CREATE", "UPDATE"],
            "answer": "INSERT"
        },
        {
            "question": "Which command modifies existing data?",
            "options": ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
            "answer": "UPDATE"
        },
        {
            "question": "Which SQL keyword removes a table?",
            "options": ["DELETE TABLE", "DROP", "REMOVE", "CLEAR"],
            "answer": "DROP"
        }
    ],


    "machine learning": [
        {
            "question": "Which type of learning uses labelled data?",
            "options": [
                "Supervised Learning",
                "Unsupervised Learning",
                "Reinforcement Learning",
                "Random Learning"
            ],
            "answer": "Supervised Learning"
        },
        {
            "question": "Which algorithm is commonly used for classification?",
            "options": [
                "Linear Regression",
                "Logistic Regression",
                "K-Means",
                "PCA"
            ],
            "answer": "Logistic Regression"
        },
        {
            "question": "What is overfitting?",
            "options": [
                "Model performs well on training data but poorly on new data",
                "Model has no data",
                "Model is too simple",
                "Model cannot train"
            ],
            "answer": "Model performs well on training data but poorly on new data"
        },
        {
            "question": "Which library is commonly used for machine learning in Python?",
            "options": [
                "Scikit-learn",
                "Matplotlib",
                "Requests",
                "BeautifulSoup"
            ],
            "answer": "Scikit-learn"
        },
        {
            "question": "Which technique is used to divide data into training and testing sets?",
            "options": [
                "train_test_split",
                "data_divide",
                "split_data",
                "divide_train"
            ],
            "answer": "train_test_split"
        }
    ],


    "git": [
        {
            "question": "Which command creates a Git repository?",
            "options": [
                "git start",
                "git init",
                "git create",
                "git new"
            ],
            "answer": "git init"
        },
        {
            "question": "Which command uploads commits to GitHub?",
            "options": [
                "git upload",
                "git send",
                "git push",
                "git transfer"
            ],
            "answer": "git push"
        },
        {
            "question": "Which command downloads changes from a remote repository?",
            "options": [
                "git pull",
                "git download",
                "git receive",
                "git update"
            ],
            "answer": "git pull"
        },
        {
            "question": "Which command shows the current Git status?",
            "options": [
                "git check",
                "git status",
                "git state",
                "git show-status"
            ],
            "answer": "git status"
        },
        {
            "question": "Which command creates a new Git branch?",
            "options": [
                "git branch",
                "git newbranch",
                "git create",
                "git branch-new"
            ],
            "answer": "git branch"
        }
    ],


    "javascript": [
        {
            "question": "Which keyword declares a variable that can be reassigned?",
            "options": ["const", "let", "fixed", "varonly"],
            "answer": "let"
        },
        {
            "question": "Which symbol represents strict equality?",
            "options": ["=", "==", "===", "!="],
            "answer": "==="
        },
        {
            "question": "Which language adds interactivity to web pages?",
            "options": ["HTML", "CSS", "JavaScript", "SQL"],
            "answer": "JavaScript"
        },
        {
            "question": "Which keyword declares a constant?",
            "options": ["constant", "const", "fixed", "static"],
            "answer": "const"
        },
        {
            "question": "Which method converts JSON text into a JavaScript object?",
            "options": [
                "JSON.parse()",
                "JSON.convert()",
                "JSON.object()",
                "JSON.read()"
            ],
            "answer": "JSON.parse()"
        }
    ]
}


# ============================================================
# RECOMMENDATION TOPICS
# ============================================================

TOPIC_MAP = {

    "python": [
        "Python Fundamentals",
        "Object-Oriented Programming",
        "NumPy and Pandas",
        "Python Projects"
    ],

    "sql": [
        "SQL Fundamentals",
        "Joins and Subqueries",
        "Database Design",
        "Query Optimization"
    ],

    "machine learning": [
        "Machine Learning Fundamentals",
        "Supervised Learning",
        "Unsupervised Learning",
        "Scikit-learn",
        "Model Evaluation"
    ],

    "git": [
        "Git Fundamentals",
        "Branching and Merging",
        "GitHub",
        "Pull Requests"
    ],

    "javascript": [
        "JavaScript Fundamentals",
        "ES6+",
        "DOM Manipulation",
        "Asynchronous JavaScript"
    ],

    "react": [
        "React Fundamentals",
        "Components and Props",
        "State Management",
        "React Hooks"
    ],

    "java": [
        "Java Fundamentals",
        "Object-Oriented Programming",
        "Collections Framework",
        "Exception Handling"
    ],

    "c++": [
        "C++ Fundamentals",
        "Object-Oriented Programming",
        "STL",
        "Data Structures and Algorithms"
    ],

    "data science": [
        "Statistics",
        "Data Analysis",
        "Pandas",
        "Data Visualization"
    ],

    "docker": [
        "Docker Fundamentals",
        "Docker Images",
        "Docker Containers",
        "Docker Compose"
    ]
}


# ============================================================
# SKILL ASSESSMENT
# ============================================================

def assess_skill(skill):

    skill_key = skill.strip().lower()

    if skill_key not in QUESTION_BANK:

        return {
            "skill": skill,
            "proficiency": 0,
            "questions_attempted": 0,
            "correct_answers": 0,
            "status": "Assessment not available"
        }

    questions = QUESTION_BANK[skill_key]

    correct = 0

    print("\n========================================")
    print("QUICK SKILL ASSESSMENT")
    print("Skill:", skill)
    print("========================================")

    for number, question in enumerate(questions, start=1):

        print("\nQ" + str(number) + ".", question["question"])

        for index, option in enumerate(
            question["options"],
            start=1
        ):
            print(
                str(index) + ". " + option
            )

        while True:

            try:

                choice = int(
                    input("Enter option number: ")
                )

                if 1 <= choice <= len(
                    question["options"]
                ):
                    break

                print("Please select a valid option.")

            except ValueError:

                print(
                    "Please enter a number."
                )

        selected_answer = question[
            "options"
        ][choice - 1]

        if selected_answer.lower() == \
                question["answer"].lower():

            correct += 1

            print("Correct!")

        else:

            print(
                "Incorrect!"
            )

    proficiency = round(
        (correct / len(questions)) * 100,
        2
    )

    print(
        "\nYour proficiency in",
        skill,
        "is:",
        str(proficiency) + "%"
    )

    return {
        "skill": skill,
        "proficiency": proficiency,
        "questions_attempted": len(questions),
        "correct_answers": correct,
        "status": "Assessment completed"
    }


# ============================================================
# SKILL MATCHING
# ============================================================

def calculate_match(
    student_skills,
    required_skills
):

    student_map = {
        item["skill"].strip().lower():
        float(item["proficiency"])
        for item in student_skills
    }

    required_map = {
        skill.strip().lower(): 1.0
        for skill in required_skills
    }

    all_skills = sorted(
        set(student_map.keys()) |
        set(required_map.keys())
    )

    student_vector = [
        student_map.get(skill, 0.0) / 100
        for skill in all_skills
    ]

    required_vector = [
        required_map.get(skill, 0.0)
        for skill in all_skills
    ]

    if sum(student_vector) == 0:

        match_percentage = 0.0

    else:

        similarity = cosine_similarity(
            [student_vector],
            [required_vector]
        )[0][0]

        match_percentage = round(
            similarity * 100,
            2
        )

    # ----------------------------------------
    # MATCHED SKILLS
    # ----------------------------------------

    matched_skills = []

    for skill in required_skills:

        key = skill.strip().lower()

        if key in student_map:

            matched_skills.append({
                "skill": skill,
                "proficiency":
                    student_map[key]
            })

    # ----------------------------------------
    # SKILL GAPS
    # ----------------------------------------

    missing_skills = []

    for skill in required_skills:

        key = skill.strip().lower()

        if key not in student_map:

            missing_skills.append(skill)

    # ----------------------------------------
    # RECOMMENDATIONS
    # ----------------------------------------

    recommendations = {}

    for skill in missing_skills:

        key = skill.strip().lower()

        if key in TOPIC_MAP:

            recommendations[skill] = \
                TOPIC_MAP[key]

        else:

            recommendations[skill] = [
                f"{skill} Fundamentals",
                f"Practical {skill}",
                f"Advanced {skill} Concepts",
                f"{skill} Projects"
            ]

    return {

        "match_percentage":
            match_percentage,

        "matched_skills":
            matched_skills,

        "missing_skills":
            missing_skills,

        "recommended_topics":
            recommendations
    }


# ============================================================
# MAIN PROGRAM
# ============================================================

def main():

    print("\n")
    print("========================================")
    print("       AI & SKILL MATCHING SYSTEM")
    print("========================================")

    # ----------------------------------------
    # GET INTERNSHIP SKILLS
    # ----------------------------------------

    print("\nEnter the skills required for")
    print("the internship/job.")

    skills_input = input(
        "\nEnter skills separated by commas: "
    )

    required_skills = [
        skill.strip()
        for skill in skills_input.split(",")
        if skill.strip()
    ]

    if not required_skills:

        print(
            "No skills were entered."
        )

        return

    print("\nRequired Skills:")

    for skill in required_skills:

        print("-", skill)

    # ----------------------------------------
    # STUDENT ASSESSMENT
    # ----------------------------------------

    student_skills = []

    print("\n")
    print("========================================")
    print("       STARTING SKILL ASSESSMENT")
    print("========================================")

    for skill in required_skills:

        result = assess_skill(skill)

        if result["questions_attempted"] > 0:

            student_skills.append({

                "skill":
                    result["skill"],

                "proficiency":
                    result["proficiency"]

            })

    # ----------------------------------------
    # MATCHING
    # ----------------------------------------

    match_result = calculate_match(
        student_skills,
        required_skills
    )

    # ----------------------------------------
    # FINAL RESULT
    # ----------------------------------------

    final_result = {

        "student_skill_profile":
            student_skills,

        "internship_required_skills":
            required_skills,

        "match_percentage":
            match_result[
                "match_percentage"
            ],

        "matched_skills":
            match_result[
                "matched_skills"
            ],

        "missing_skills":
            match_result[
                "missing_skills"
            ],

        "recommended_topics":
            match_result[
                "recommended_topics"
            ]
    }

    print("\n")
    print("========================================")
    print("             FINAL RESULT")
    print("========================================")

    print(
        json.dumps(
            final_result,
            indent=2
        )
    )


# ============================================================
# PROGRAM START
# ============================================================

if __name__ == "__main__":

    main()

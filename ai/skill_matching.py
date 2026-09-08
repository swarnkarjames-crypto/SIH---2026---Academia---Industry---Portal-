import json
from sklearn.metrics.pairwise import cosine_similarity


def skill_matching(student_skills, required_skills):
    """
    Compare student skills with internship/job requirements.

    student_skills format:
    [
        {"skill": "Python", "proficiency": 90},
        {"skill": "SQL", "proficiency": 70}
    ]

    required_skills format:
    [
        "Python",
        "SQL",
        "Machine Learning"
    ]
    """

    # -----------------------------
    # 1. Create student skill map
    # -----------------------------
    student_map = {
        item["skill"].strip().lower(): float(item["proficiency"])
        for item in student_skills
    }

    # -----------------------------
    # 2. Normalize required skills
    # -----------------------------
    required_map = {
        skill.strip().lower(): 1.0
        for skill in required_skills
    }

    # -----------------------------
    # 3. Create common skill list
    # -----------------------------
    all_skills = sorted(
        set(student_map.keys()) | set(required_map.keys())
    )

    # Student proficiency vector
    student_vector = [
        student_map.get(skill, 0.0) / 100.0
        for skill in all_skills
    ]

    # Required skill vector
    required_vector = [
        required_map.get(skill, 0.0)
        for skill in all_skills
    ]

    # -----------------------------
    # 4. Calculate cosine similarity
    # -----------------------------
    if sum(student_vector) == 0 or sum(required_vector) == 0:
        match_percentage = 0.0
    else:
        similarity = cosine_similarity(
            [student_vector],
            [required_vector]
        )[0][0]

        match_percentage = round(similarity * 100, 2)

    # -----------------------------
    # 5. Find matched skills
    # -----------------------------
    matched_skills = []

    for skill in required_skills:
        key = skill.strip().lower()

        if key in student_map:
            matched_skills.append(skill)

    # -----------------------------
    # 6. Find skill gaps
    # -----------------------------
    missing_skills = []

    for skill in required_skills:
        key = skill.strip().lower()

        if key not in student_map:
            missing_skills.append(skill)

    # -----------------------------
    # 7. Learning recommendations
    # -----------------------------
    topic_map = {
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
            "Scikit-learn"
        ],

        "deep learning": [
            "Neural Networks",
            "Convolutional Neural Networks",
            "Recurrent Neural Networks",
            "TensorFlow or PyTorch"
        ],

        "data science": [
            "Statistics",
            "Data Analysis",
            "Pandas",
            "Data Visualization"
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

        "git": [
            "Git Fundamentals",
            "Branching and Merging",
            "GitHub",
            "Pull Requests"
        ],

        "docker": [
            "Docker Fundamentals",
            "Docker Images",
            "Docker Containers",
            "Docker Compose"
        ],

        "cloud computing": [
            "Cloud Computing Fundamentals",
            "AWS/Azure/GCP Basics",
            "Cloud Storage",
            "Cloud Deployment"
        ]
    }

    recommendations = {}

    for skill in missing_skills:
        key = skill.strip().lower()

        if key in topic_map:
            recommendations[skill] = topic_map[key]
        else:
            recommendations[skill] = [
                f"{skill} Fundamentals",
                f"Practical {skill}",
                f"Advanced {skill} Concepts",
                f"{skill} Projects"
            ]

    # -----------------------------
    # 8. Return result
    # -----------------------------
    return {
        "match_percentage": match_percentage,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "recommended_topics": recommendations
    }


# ============================================
# TEST / DEMO
# ============================================

if __name__ == "__main__":

    student_skills = [
        {
            "skill": "Python",
            "proficiency": 90
        },
        {
            "skill": "SQL",
            "proficiency": 70
        },
        {
            "skill": "Git",
            "proficiency": 80
        }
    ]

    required_skills = [
        "Python",
        "SQL",
        "Machine Learning",
        "Git"
    ]

    result = skill_matching(
        student_skills,
        required_skills
    )

    print(json.dumps(result, indent=2))

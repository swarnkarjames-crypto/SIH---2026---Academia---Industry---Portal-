from skill_matching import skill_matching


def test_skill_matching():

    student_skills = [
        {"skill": "Python", "proficiency": 90},
        {"skill": "SQL", "proficiency": 70},
        {"skill": "Git", "proficiency": 80}
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

    assert "match_percentage" in result
    assert "matched_skills" in result
    assert "missing_skills" in result
    assert "recommended_topics" in result

    assert "Python" in result["matched_skills"]
    assert "SQL" in result["matched_skills"]
    assert "Git" in result["matched_skills"]

    assert "Machine Learning" in result["missing_skills"]

    print("All tests passed!")


if __name__ == "__main__":
    test_skill_matching()

from skill_matching import calculate_match


def test_basic_skill_matching():

    student_skills = [
        {
            "skill": "Python",
            "proficiency": 80
        },
        {
            "skill": "SQL",
            "proficiency": 60
        }
    ]

    required_skills = [
        "Python",
        "SQL"
    ]

    result = calculate_match(
        student_skills,
        required_skills
    )

    assert "match_percentage" in result
    assert "matched_skills" in result
    assert "missing_skills" in result
    assert "recommended_topics" in result

    assert result["match_percentage"] >= 0
    assert result["match_percentage"] <= 100

    assert len(result["matched_skills"]) == 2

    print("Basic skill matching test passed!")


def test_skill_gap_detection():

    student_skills = [
        {
            "skill": "Python",
            "proficiency": 80
        }
    ]

    required_skills = [
        "Python",
        "Machine Learning"
    ]

    result = calculate_match(
        student_skills,
        required_skills
    )

    assert "Machine Learning" in result["missing_skills"]

    print("Skill gap detection test passed!")


def test_recommendations():

    student_skills = [
        {
            "skill": "Python",
            "proficiency": 90
        }
    ]

    required_skills = [
        "Python",
        "Machine Learning"
    ]

    result = calculate_match(
        student_skills,
        required_skills
    )

    assert "Machine Learning" in result["missing_skills"]

    assert "Machine Learning" in result[
        "recommended_topics"
    ]

    print("Recommendation test passed!")


def test_proficiency_range():

    student_skills = [
        {
            "skill": "Python",
            "proficiency": 75
        }
    ]

    required_skills = [
        "Python"
    ]

    result = calculate_match(
        student_skills,
        required_skills
    )

    proficiency = result["matched_skills"][0][
        "proficiency"
    ]

    assert 0 <= proficiency <= 100

    print("Proficiency range test passed!")


if __name__ == "__main__":

    test_basic_skill_matching()
    test_skill_gap_detection()
    test_recommendations()
    test_proficiency_range()

    print("\nAll tests passed successfully!")

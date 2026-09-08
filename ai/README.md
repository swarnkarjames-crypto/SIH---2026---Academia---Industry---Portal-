# AI & Skill Matching Module

## Member 4 - AI & Skill Matching

This module uses Python and Scikit-learn to analyze student skills and match them with internship/job requirements.

## Features

- Skill assessment calculation
- Internship/job skill matching
- Match percentage calculation
- Skill-gap detection
- Learning recommendations
- JSON output

## Technology

- Python
- Scikit-learn
- Cosine Similarity

## Input

Student skills are provided with proficiency scores from 0 to 100.

Example:

```json
[
  {
    "skill": "Python",
    "proficiency": 90
  },
  {
    "skill": "SQL",
    "proficiency": 70
  }
]

Required internship skills:
{
  "match_percentage": 78.42,
  "matched_skills": [
    "Python",
    "SQL",
    "Git"
  ],
  "missing_skills": [
    "Machine Learning"
  ],
  "recommended_topics": {
    "Machine Learning": [
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Unsupervised Learning",
      "Scikit-learn"
    ]
  }
}

#Example Output
{
  "match_percentage": 78.42,
  "matched_skills": [
    "Python",
    "SQL",
    "Git"
  ],
  "missing_skills": [
    "Machine Learning"
  ],
  "recommended_topics": {
    "Machine Learning": [
      "Machine Learning Fundamentals",
      "Supervised Learning",
      "Unsupervised Learning",
      "Scikit-learn"
    ]
  }
}
#Install the required Python library:
    pip install -r requirements.txt

#Run the Module
    python skill_matching.py
#Output
    The module returns JSON containing:

    Match percentage
    Matched skills
    Missing skills
    Recommended learning topics

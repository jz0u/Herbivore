# The Herbivore Project


## Table of Contents
1.[Overview](#overview)
2.[Features](#2-features)
   [Cannabis Strain Database](#a-cannabis-strain-database)
   [Search and Filtering](#b-search-and-filtering)
   [User Review System](#c-user-review-system)
   [Dispensary Location](#d-dispensary-location)
   [Personalized Strain Recommendations](#e-personalized-strain-recommendations)
   [User Account](#f-user-account)
   [Educational Resources](#g-educational-resources)
3.[Technology Stack](#3-technology-stack)
4.[Development Challenges and Solutions](#4-development-challenges-and-solutions)
5.[Database Schema](#5-database-schema)
6.[API Design]()
7.[Machine Learning Recommendation Model]()
8.[UI/UX Design]()
9.[Security and Compliance]()

## 1. Overview

The herbivore project is a web/mobile application that focuses on cataloging cannabis strains.
Users can browse strain information, report effects, and receieve recommendations based on their preferences.

target users: cannabis consumers, researchers
goals: bilding a community, education users

## 2. Features

### A. Cannabis Strain Database

- Strain name
- type(Indica, Sativa, Hybrid)
- THC/CBD percentages
- common effects
- aroma/flavor
- growing difficulty
- price range

### B. Search and Filtering

- search by: 
   - strain name
   - flexible search with typo tolerance
   
- filter by: 
   - effect
   - medical condition
   - THC/CBD levels
   - Flavor notes
   - price range

### C. User Review System

- star ratings
- text reviews
- user-reported effects
- pros and cons
- time log
- helpfulness
### D. Dispensary Location

- geolocation based dispensary recomendations
- incoration of google maps API

### E. Personalized Strain Recommendations

- **Machine Learning Model**
   - A recommendation engine leverages collaborative filtering or content-based filtering to suggest strains based on past interactions and preferences.

- **Preference Questionnaire**
   - Optional questionnaire asking users about their goals (e.g., relaxation, pain relief) to better tailor suggestions.
  
- **Feedback Loop**
   - Users can give feedback on recommendations to improve the model over time, helping refine suggestions as data grows.

### F. User Account

- user account
- favorite/bookmark system
- messaging
- create post

### G. Educational Resources

- **Strain Education:**

   Provides information about strain genetics, the differences between Indica, Sativa, and Hybrid strains, and how THC/CBD ratios affect users.

- **Consumption Safety Guidelines:**

   Resources on safe usage, potential risks, and interaction effects, including health considerations.

- **Legal Information:**

   Education about legal considerations, tailored by region (if applicable), such as regulations around possession and use.

## 3. Technology Stack

- FrontEnd: **React** or Vue.js
- Backend: **Node.js** with **Express**
- Database: **MongoDB** (NoSQL for strain data flexibility) or PostgreSQL (for structured relational data).
- Authentication: JWT
- Deployment: AWS or Heroku or Netlify
- Machine Learning: Python with Scikit-Learn or TensorFlow for recommendation engine

## 4. Development Challenges and Solutions

1. Data Collection and Accuracy:

Challenge: Aggregating reliable, diverse data on strains and effects from reputable sources.
Solution: Partner with existing cannabis databases (like Leafly) through their API, if available, or allow user-generated entries with a moderation system.

2. Machine Learning Model Accuracy:

Challenge: Building a recommendation model that accurately matches users with strains based on limited initial data.
Solution: Start with basic filtering by strain attributes and effects, then improve the model over time by gathering user feedback and interactions.

3. Legal Considerations and Compliance:

Challenge: Ensuring the app complies with legal regulations around cannabis content and user privacy, especially if user data involves medical use.
Solution: Follow best practices for data encryption, user consent, and clear disclaimers about medical information.

4. User Engagement:

Challenge: Keeping users engaged with the app and ensuring data is regularly updated.
Solution: Incorporate gamification elements (like badges for reviews) and offer regular updates, notifications on new strains, and user-tailored recommendations.

## 5. Database Schema

1. Strains

strain_id: UUID
name: String
type: Enum (Indica, Sativa, Hybrid)
thc_content: Float
cbd_content: Float
effects: List of effects (e.g., relaxation, focus)
flavors: List of flavors (e.g., citrus, berry)
medical_uses: List of common uses (e.g., anxiety, pain relief)

2. UserProfiles

user_id: UUID
username: String
email: String
preferences: List (e.g., desired effects, medicinal needs)
reviewed_strains: List of reviewed strain IDs

3. Reviews

review_id: UUID
user_id: Reference to User
strain_id: Reference to Strain
rating: Integer (1-5)
effects: List of effects experienced
comments: Text
created_at: Timestamp

4. UsageLogs (Optional)

log_id: UUID
user_id: Reference to User
strain_id: Reference to Strain
dose: Float
symptoms_treated: List of symptoms

## 7. API Design

Endpoints

1. Strain Data

GET /api/strains: Retrieve all strains with filters for type, THC/CBD, effects.
GET /api/strains/{strain_id}: Retrieve detailed information about a specific strain.
POST /api/strains: Add a new strain (admin-only).

2. User Reviews

POST /api/reviews: Submit a review for a strain.
GET /api/reviews/{strain_id}: Retrieve reviews for a specific strain.

3. Recommendations

GET /api/recommendations/{user_id}: Get personalized strain recommendations.

4. User Management

POST /api/auth/signup: Register a new user.
POST /api/auth/login: Authenticate and log in a user.

## 8. Machine Learning Recommendation Model

***Approach***
The recommendation engine will use a collaborative filtering or content-based filtering approach. Based on the strain characteristics and user reviews, it will suggest strains that match the user’s preferences or past interactions.

***Model Training***
Data Preprocessing: Aggregate strain data, user reviews, and user interactions.
Model Type: Collaborative filtering (K-Nearest Neighbors) or content-based filtering (TF-IDF vectorization).
Evaluation Metrics: Mean Absolute Error (MAE) for predicted ratings or accuracy in matching user preferences.

***Deployment***
The model will be retrained periodically using batch processing. Recommendations will be served through API endpoints integrated with the main backend.

## 9. UI/UX Design

***Key UI Components***

**Home Page:** Search and filter strains, view trending or popular strains.
**Strain Detail Page:** Display strain information, effects, flavors, and user reviews.
**Recommendation Page:** Personalized suggestions based on user preferences.
**User Profile:** View and manage user preferences, review history, and settings.
**Educational Resources:** Access articles and guides on cannabis usage, safety, and legalities.

***UX Considerations***

**User Engagement:** Gamification for review contributions (e.g., badges).
**Accessibility:** Clear typography and contrast, screen reader support.
**Intuitive Navigation:** Smooth transitions between strain details, reviews, and recommendations.

## 10. Security and Compliance

**User Data Security**

Encryption: SSL/TLS for data in transit, AES encryption for sensitive data at rest.
Authentication: Firebase Authentication or OAuth for secure login.
Access Control: Role-based access control for sensitive operations.

**Compliance**

Legal Disclaimer: Clear statements about non-medical advice.
User Consent: GDPR-compliant consent for data collection and usage.

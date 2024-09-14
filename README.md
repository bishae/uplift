# UPLIFT

## Overview

UpLift is a project and cost management platform designed to cater to freelancers and small teams. It enables users to efficiently manage projects, track costs, manage client invoicing, and monitor time spent on tasks. The platform aims to streamline project delivery, budgeting, and team collaboration, providing simple yet powerful tools to enhance productivity and cost control.

## Target Audience

- Freelancers
- Small teams (startups, small agencies)
- Independent contractors and consultants

## Objectives

- Simplify project management and cost tracking for freelancers and small teams.
- Help users manage project timelines, team tasks, and budgets with ease.
- Provide a centralized dashboard for task, cost, and time tracking.
- Offer seamless invoicing and reporting tools to manage client relationships and payments.

## Database Schema

### 1. **Users Table**

| Column        | Type                                        | Constraints                                           |
| ------------- | ------------------------------------------- | ----------------------------------------------------- |
| user_id       | INT                                         | PRIMARY KEY, AUTO_INCREMENT                           |
| first_name    | VARCHAR(100)                                | NOT NULL                                              |
| last_name     | VARCHAR(100)                                | NOT NULL                                              |
| email         | VARCHAR(100)                                | NOT NULL, UNIQUE                                      |
| password_hash | VARCHAR(255)                                | NOT NULL                                              |
| role          | ENUM('freelancer', 'team_member', 'client') | NOT NULL                                              |
| created_at    | TIMESTAMP                                   | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at    | TIMESTAMP                                   | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

---

### 2. **Projects Table**

| Column       | Type           | Constraints                                           |
| ------------ | -------------- | ----------------------------------------------------- |
| project_id   | INT            | PRIMARY KEY, AUTO_INCREMENT                           |
| project_name | VARCHAR(255)   | NOT NULL                                              |
| description  | TEXT           | NULL                                                  |
| start_date   | DATE           | NOT NULL                                              |
| end_date     | DATE           | NULL                                                  |
| budget       | DECIMAL(10, 2) | NULL                                                  |
| created_by   | INT            | FOREIGN KEY (Users.user_id)                           |
| created_at   | TIMESTAMP      | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at   | TIMESTAMP      | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

---

### 3. **Tasks Table**

| Column      | Type                                            | Constraints                                           |
| ----------- | ----------------------------------------------- | ----------------------------------------------------- |
| task_id     | INT                                             | PRIMARY KEY, AUTO_INCREMENT                           |
| task_name   | VARCHAR(255)                                    | NOT NULL                                              |
| description | TEXT                                            | NULL                                                  |
| project_id  | INT                                             | FOREIGN KEY (Projects.project_id)                     |
| assigned_to | INT                                             | FOREIGN KEY (Users.user_id)                           |
| priority    | ENUM('low', 'medium', 'high')                   | DEFAULT 'medium'                                      |
| status      | ENUM('not_started', 'in_progress', 'completed') | DEFAULT 'not_started'                                 |
| due_date    | DATE                                            | NULL                                                  |
| created_by  | INT                                             | FOREIGN KEY (Users.user_id)                           |
| created_at  | TIMESTAMP                                       | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at  | TIMESTAMP                                       | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

---

### 4. **Time Tracking Table**

| Column        | Type          | Constraints                 |
| ------------- | ------------- | --------------------------- |
| time_entry_id | INT           | PRIMARY KEY, AUTO_INCREMENT |
| task_id       | INT           | FOREIGN KEY (Tasks.task_id) |
| user_id       | INT           | FOREIGN KEY (Users.user_id) |
| hours_worked  | DECIMAL(5, 2) | NOT NULL                    |
| work_date     | DATE          | NOT NULL                    |
| created_at    | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP   |

---

### 5. **Expenses Table**

| Column       | Type           | Constraints                       |
| ------------ | -------------- | --------------------------------- |
| expense_id   | INT            | PRIMARY KEY, AUTO_INCREMENT       |
| project_id   | INT            | FOREIGN KEY (Projects.project_id) |
| task_id      | INT            | NULL, FOREIGN KEY (Tasks.task_id) |
| description  | VARCHAR(255)   | NULL                              |
| amount       | DECIMAL(10, 2) | NOT NULL                          |
| expense_date | DATE           | NOT NULL                          |
| created_by   | INT            | FOREIGN KEY (Users.user_id)       |
| created_at   | TIMESTAMP      | DEFAULT CURRENT_TIMESTAMP         |

---

### 6. **Invoices Table**

| Column       | Type                               | Constraints                                           |
| ------------ | ---------------------------------- | ----------------------------------------------------- |
| invoice_id   | INT                                | PRIMARY KEY, AUTO_INCREMENT                           |
| project_id   | INT                                | FOREIGN KEY (Projects.project_id)                     |
| client_id    | INT                                | FOREIGN KEY (Users.user_id)                           |
| invoice_date | DATE                               | NOT NULL                                              |
| due_date     | DATE                               | NOT NULL                                              |
| total_amount | DECIMAL(10, 2)                     | NOT NULL                                              |
| status       | ENUM('pending', 'paid', 'overdue') | DEFAULT 'pending'                                     |
| created_at   | TIMESTAMP                          | DEFAULT CURRENT_TIMESTAMP                             |
| updated_at   | TIMESTAMP                          | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

---

### 7. **Invoice Items Table**

| Column          | Type           | Constraints                       |
| --------------- | -------------- | --------------------------------- |
| invoice_item_id | INT            | PRIMARY KEY, AUTO_INCREMENT       |
| invoice_id      | INT            | FOREIGN KEY (Invoices.invoice_id) |
| description     | VARCHAR(255)   | NULL                              |
| quantity        | INT            | DEFAULT 1                         |
| unit_price      | DECIMAL(10, 2) | NOT NULL                          |
| created_at      | TIMESTAMP      | DEFAULT CURRENT_TIMESTAMP         |

---

### 8. **Comments Table**

| Column       | Type      | Constraints                 |
| ------------ | --------- | --------------------------- |
| comment_id   | INT       | PRIMARY KEY, AUTO_INCREMENT |
| task_id      | INT       | FOREIGN KEY (Tasks.task_id) |
| user_id      | INT       | FOREIGN KEY (Users.user_id) |
| comment_text | TEXT      | NOT NULL                    |
| created_at   | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP   |

---

### 9. **Notifications Table**

| Column            | Type                                              | Constraints                 |
| ----------------- | ------------------------------------------------- | --------------------------- |
| notification_id   | INT                                               | PRIMARY KEY, AUTO_INCREMENT |
| user_id           | INT                                               | FOREIGN KEY (Users.user_id) |
| notification_type | ENUM('task_due', 'invoice_due', 'budget_overrun') | NOT NULL                    |
| message           | TEXT                                              | NOT NULL                    |
| is_read           | BOOLEAN                                           | DEFAULT FALSE               |
| created_at        | TIMESTAMP                                         | DEFAULT CURRENT_TIMESTAMP   |

---

### 10. **Files Table**

| Column      | Type         | Constraints                       |
| ----------- | ------------ | --------------------------------- |
| file_id     | INT          | PRIMARY KEY, AUTO_INCREMENT       |
| task_id     | INT          | FOREIGN KEY (Tasks.task_id)       |
| project_id  | INT          | FOREIGN KEY (Projects.project_id) |
| file_name   | VARCHAR(255) | NOT NULL                          |
| file_path   | VARCHAR(255) | NOT NULL                          |
| uploaded_by | INT          | FOREIGN KEY (Users.user_id)       |
| uploaded_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP         |

---

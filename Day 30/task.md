- Save the user id to the notes model
- View all user's notes in the get notes route(should see username also):-
        {
            "message": "Notes fetched successfully",
            "notes": [
                {
                    "_id": "6a10b9860d1326593ba6e03a",
                    "title": "1",
                    "description": "Srijan mere lawre pe!!",
                    "user": "6a10b9c60d1326593ba6e03b",
                    "username": "ramiz",
                    "__v": 0
                }
            ]
        }
- view only user's notes in the another get notes route(/profile/*)
            {
                "message": "Notes fetched successfully",
                "notes": [
                    {
                        "_id": "6a10b9860d1326593ba6e03a",
                        "title": "1",
                        "description": "Srijan mere lawre pe!!",
                        "__v": 0
                    }
                ]
            }

- Update a note

- Delete a note
This API handles EBook order management.

User Stories

User should be able to do the following:

1-create a new object and add it to the Database.
2-get all the objects from the database.
3-get single item from the database.
4-delete single item from the database.
5-delete all items in the database.
6-post a comment to any single item.
7-update any single item in the database.

Object Design

{
	"name": "Book name",
	"image": "book image file url",
	"description": "book description",
	"keywords": "keywords",
	"origin": "book origin",
	"isbd": "book isbn",
	"author": "book author",
	"co-authors": "book co-authors",
	"date": "date published",
	"comments": "comments"[]
}

Routes and request methods.

Routes			HTTP Methods		Description
/ebook			GET					Display all items
/ebook			POST				Create new item
/ebook			DELETE				Delete all items
/ebook/:bookid	DELETE				Delete single item
/ebook/:bookid	GET					Display single item given its name
/ebook/:bookid	POST				Add a comment to a specific item
/ebook/:bookid	PATCH				Update a specific item given its name

Dependencies

express axios body-parser nodemon mongoose morgan dotenv

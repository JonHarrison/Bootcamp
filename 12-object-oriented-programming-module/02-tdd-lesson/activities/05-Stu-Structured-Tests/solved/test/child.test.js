const Child = require("../child");

describe("Child", () => {
    describe("Initialization", () => {
        // Contructor test
        it("should construct an object when passed a value name and an age", () => {
            const child = new Child("Sebastian", 13);
            expect("name" in child).toEqual(true);
            expect("age" in child).toEqual(true);
            expect(child.name).toEqual("Sebastian");
            expect(child.age).toEqual(13);
        })

        // Exception test
        it("should throw an error if not provided a 'string' value for name", () => {
            // Arrange
            const cb = () => new Child();
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if provided a 'number' value for name", () => {
            // Arrange
            const cb = () => new Child(13);
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if not provided a 'number' value for age", () => {
            // Arrange
            const cb = () => new Child('child');
            const err = new Error(
                "Expected parameter 'age' to be a non-negative number"
            );

            // Assert
            expect(cb).toThrowError(err);
        });

        // Exception test
        it("should throw an error if provided a 'string' value for age", () => {
            // Arrange
            const cb = () => new Child('child','thirteen');
            const err = new Error(
                "Expected parameter 'age' to be a non-negative number"
            );

            // Assert
            expect(cb).toThrowError(err);
        });

    })
});

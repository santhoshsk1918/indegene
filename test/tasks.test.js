let assert = require("assert");
const authorService = require("../service/authorService");
const expect = require('chai').expect;

describe('TASK 1', () => {
    it('For n = 1 expecting 9 elements', () => {
        return authorService.getAuthorWithAwardsGreaterThan(1).then((data) => {
            expect(data).to.have.lengthOf(9)   
        }).catch((err) => {
            expect(err).to.equal(null)
        })
    });
    it('For n = 4 expecting 2 elemnents', () => {
        return authorService.getAuthorWithAwardsGreaterThan(4).then((data) => {
            expect(data).to.have.lengthOf(2)   
        }).catch((err) => {
            console.log(err);
            expect(err).to.equal(null)
        })
    });
})

describe('TASK 2', () => {
    it('For year > 1991', () => {
        return authorService.awardGreterThanYear(1991).then((data) => {
            expect(data).to.have.lengthOf(7)   
        }).catch((err) => {
            expect(err).to.equal(null)
        })
    });
    it('For year > 2006', () => {
        return authorService.awardGreterThanYear(2006).then((data) => {
            expect(data).to.have.lengthOf(2)   
        }).catch((err) => {
            console.log(err);
            expect(err).to.equal(null)
        })
    });
})

describe('TASK 3', () => {
    it('List of profit and books sold', () => {
        return authorService.profitsAndSold().then((data) => {
            expect(data).to.have.lengthOf(4)   
        }).catch((err) => {
            console.log(err);
            expect(err).to.equal(null)
        })
    });
})

describe('TASK 4', () => {
    it('Total Sold with birth grather than or equal to 1955-12-09T05:00:00.000Z and price >= 2500', () => {
        return authorService.totalSoldGreatherThanYear("1955-12-09T05:00:00.000Z", 2500).then((data) => {
            expect(data).to.have.lengthOf(1)   
        }).catch((err) => {
            console.log(err);
            expect(err).to.equal(null)
        })
    });
    it('Total Sold with birth grather than or equal to 1906-12-09T05:00:00.000Z and price >= 7000', () => {
        return authorService.totalSoldGreatherThanYear("1906-12-09T05:00:00.000Z", 7000).then((data) => {
            expect(data).to.have.lengthOf(1)   
        }).catch((err) => {
            console.log(err);
            expect(err).to.equal(null)
        })
    });
})
# Changelog

All notable changes to `RWID Express.js` will be documented in this file.

## [Unreleased](https://github.com/ngodingbang/rwid-expressjs/compare/1.1.0...develop)

## [1.1.0](https://github.com/ngodingbang/rwid-expressjs/releases/tag/1.1.0) - 2023-12-20

- feat: create asyncHandler() function to handle async method of controller on routes by [@ngodingbang](https://github.com/ngodingbang) in [#a76632a](https://github.com/ngodingbang/rwid-expressjs/commit/a76632ac45183527176978d2acf5d49554615881).
- chore: create HomeController to handle home routes by [@ngodingbang](https://github.com/ngodingbang) in [#e711d3b](https://github.com/ngodingbang/rwid-expressjs/commit/e711d3b010d03e32cb3ce9368933a38fdb45fbb3).
- feat: merge pull request from ngodingbang/feature/github-actions by [@ngodingbang](https://github.com/ngodingbang) in [#1](https://github.com/ngodingbang/rwid-expressjs/pull/1).
- chore: set default content-type response header into "application/vnd.api+json" by [@ngodingbang](https://github.com/ngodingbang) in [#3b95158](https://github.com/ngodingbang/rwid-expressjs/commit/3b951580267e93a0763f9281b8a902e9aba0cae2).

## [1.0.1](https://github.com/ngodingbang/rwid-expressjs/releases/tag/1.0.1) - 2023-12-09

- fix: remove unnecessary auth routes by [@ngodingbang](https://github.com/ngodingbang) in [#963639a](https://github.com/ngodingbang/rwid-expressjs/commit/963639ab16df41afba1a8479e3a488424fe4f3f9).
- chore: bump version into 1.0.1 by [@ngodingbang](https://github.com/ngodingbang) in [#35ab0e9](https://github.com/ngodingbang/rwid-expressjs/commit/35ab0e99efe4a7e34dc26c945d81a446cc4c8a8b).
- fix: change test script on package.json by [@ngodingbang](https://github.com/ngodingbang) in [#7067ee3](https://github.com/ngodingbang/rwid-expressjs/commit/7067ee3d5b77c660b19910dd208a9c00a687a877).
- fix: change the way to instantiate prisma orm model by [@ngodingbang](https://github.com/ngodingbang) in [#7d381fc](https://github.com/ngodingbang/rwid-expressjs/commit/7d381fc3a3a32d0abd5c210b89fca49a94645e3c).
- refactor: request variable export on TestCase by [@ngodingbang](https://github.com/ngodingbang) in [#df1edce](https://github.com/ngodingbang/rwid-expressjs/commit/df1edce48a18608c600e8f5fb56878dc7fc4c2c3).
- fix: get app version using process.env by [@ngodingbang](https://github.com/ngodingbang) in [#ab287d8](https://github.com/ngodingbang/rwid-expressjs/commit/ab287d824f4bddcd74fb3f5ac94c9ba42c057713).
- fix: /users route using prisma orm by [@ngodingbang](https://github.com/ngodingbang) in [#5a84da0](https://github.com/ngodingbang/rwid-expressjs/commit/5a84da0d84fcf0c49c96d37fabf14bd956506461).
- fix: integration testing for home and users route by [@ngodingbang](https://github.com/ngodingbang) in [#2e6cb80](https://github.com/ngodingbang/rwid-expressjs/commit/2e6cb800cd964aeb8d6004b8fca6b2986caa58bb).

## [1.0.0](https://github.com/ngodingbang/rwid-expressjs/releases/tag/1.0.0) - 2023-12-08

- initial commit by [@ianriizky](https://github.com/ianriizky) in [#2474dd5](https://github.com/ngodingbang/rwid-expressjs/commit/2474dd55a9178543d247825694c8dba150cd6999).
- feat: add tests script using jest and supertest by [@ianriizky](https://github.com/ianriizky) in [#8a65af8](https://github.com/ngodingbang/rwid-expressjs/commit/8a65af8d0dd483c4863c210ec0902fc3549964f3).
- feat: run linter using eslint with prettier by [@ianriizky](https://github.com/ianriizky) in [#33f965e](https://github.com/ngodingbang/rwid-expressjs/commit/33f965e27143b9f6dd32acb3ad3e90222d31d459).
- feat: setup prisma orm by [@ngodingbang](https://github.com/ngodingbang) in [#4846d14](https://github.com/ngodingbang/rwid-expressjs/commit/4846d141ec001995a979fbfe681af72069927fac).
- chore: update eslint config by [@ngodingbang](https://github.com/ngodingbang) in [#f111ec5](https://github.com/ngodingbang/rwid-expressjs/commit/f111ec587a51a461a282a12e2f4684bb04386279).
- chore!: move loadEnv function into helpers by [@ngodingbang](https://github.com/ngodingbang) in [#5e96960](https://github.com/ngodingbang/rwid-expressjs/commit/5e969609ba3c263cff4ca5717d2f8f5c234e1a16).
- feat: create Hash support class for password hashing by [@ngodingbang](https://github.com/ngodingbang) in [#82c332c](https://github.com/ngodingbang/rwid-expressjs/commit/82c332c0856b3829dc82387e1de297711e08574e).
- chore: create error handler function by [@ngodingbang](https://github.com/ngodingbang) in [#96a20dc](https://github.com/ngodingbang/rwid-expressjs/commit/96a20dcc0a6d794fccd13b598c5530367e3b3b9c).
- chore: add api documentation page by [@ngodingbang](https://github.com/ngodingbang) in [#be202dd](https://github.com/ngodingbang/rwid-expressjs/commit/be202dd10c122b3994bc8177a0948c681214048c).
- chore: add error class for NotFound and Unauthorized Error by [@ngodingbang](https://github.com/ngodingbang) in [#418d50a](https://github.com/ngodingbang/rwid-expressjs/commit/418d50a80f5d1bedb0aa419fa5883ec3a2371ac6).

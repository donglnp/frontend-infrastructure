# Frontend Infrastructure

## Goal

The purpose of building Frontend infrastructure is to make web application development `easier` and `faster.` The team can create professional and compatible user interfaces for different devices

Building Frontend infrastructure helps web application development become more efficient by `reducing time` and `cost for development`. Moreover, building Frontend infrastructure also helps web application maintenance and upgrade become easier.

## How

- Move core metrics: developer experience, developer velocity, debuggability, performance, and reliability
- Enhance developer productivity by improving the tooling setup
  - Linting: enforce best practices with static analysis and eslint rules
  - Unit and end to end tests
  - Deployment: continuous integration and continuous delivery
  - Type System: consistent and less-risky applications
  - Shared Configurations: create infrastructure so teams can start building new frontend applications without needing to know tricky configuration details
  - Build System: bundling frontend applications
- Shape the architecture of frontend systems
  - Define patterns for UIs (design system)
  - Define patterns for data fetching
  - Define patterns for frontend-backend relation: graphql, BFF, rest APIs
- Improve end-user experience by building infrastructure to support UX consistency across products
  - Optimize the client-side performance of web applications
  - Support teams to build consistent experiences through design systems
  - Monitoring systems: monitoring errors in the application
- Testing: Infrastructure and testing framework integrations enabling developers to write a comprehensive set of unit, integration, and end-to-end tests
- CLIs

### Dependencies
- [Angular 16](https://angular.io/)
- [Angular Material](https://material.angular.io/): UI component and Angular CDK
- [CSS preprocessor](https://sass-lang.com/guide): SCSS

### TypeScript
- [Simple Types](https://github.com/imteekay/thinking-in-types)
- [Advanced Types](https://github.com/imteekay/advanced-typescript)
- [Programming with Types](https://github.com/imteekay/programming-with-types)


## Rules to Build Your Scalable Front-End Architecture
- Define the HTML Layout structure without style rules, as a skeleton to start working from
- Build without business logic. Use functional logic only
- Avoid using animations in Javascript. Build these in CSS, so it can be easily overridden. By doing this the work of processing animations is done in the Graphics Processor Unit instead of the CPU
- Avoid manipulating the attribute style in elements. Add classes instead, and document it. With this approach, you are not forcing things that people may not want in a particular scenario, and you avoid cleaning all the attributes by mistake
- Avoid polluting your structure with elements just to cover a specific case. Instead, use pseudo-elements. With this approach, you keep the same structure applied in different themes, and some of them will use pseudo-elements to cover specific cases

## The 3 Sacred Don’ts While Building a Scalable Pattern
The following 3 rules follow the same baseline: abstract your pattern, think in structure only

1. Don’t add inline style in elements.

   - Don’t stick with a style forever. If you need to change it later, you need to go to the screen and deploy it again.

   - If you want to override a rule, you need to add !important to your rule (use !important just to ensure factual cases, like a disabled button - it is always disabled)

2. Don’t add classes that are objective, like color names (.Black), measures (.Width20px), styling (.Bold) or sizing (.fontSize16).

   - In the future, if those classes don’t make sense in a project, they need to be overridden. For example, imagine a class .Bold rule says that the font-weight is normal. This would sound strange, right?
3. Don’t put business logic in these patterns.

   - They should be clean and ready to use for every project, regardless of the business.

   - Only aggregate the functional logic if needed.

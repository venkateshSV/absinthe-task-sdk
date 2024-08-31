# Absinthe Task SDK

## Overview

Absinthe Task SDK is a TypeScript-based software development kit designed to help clients issue points for their users. This SDK provides flexibility for off-chain actions, complementing traditional on-chain indexing capabilities.

## Key Features

- TypeScript implementation for enhanced type safety and developer experience
- Modular architecture with separate modules for points, projects, and utilities
- Utilizes Axios for making HTTP requests
- Supports both CommonJS and ES Modules

## Project Structure

The project is organized into several directories:

### src/absinthe-fetch/

Contains modules related to fetching data for Absinthe, including pointsData and projects.

### src/points/

Contains modules related to points functionality.

### src/

Main entry point for the SDK.

### utils/

Utility modules containing helper functions and type definitions.

## Installation

To install the Absinthe Task SDK, run:

1. Clone the repository:

```
git clone https://github.com/venkateshSV/absinthe-task-sdk.git
```

2. Navigate to the project directory:

```
cd absinthe-task-sdk
```

3. Install dependencies:

```
npm install
```

4. Run it locally

```
sudo npm run build && npm link
```

After running the build you can link the sdk globally and now can be used by

```
sudo npm link absinthe-task-sdk
```

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://github.com/venkateshSV/absinthe-backend).

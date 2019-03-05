enum Environment {
  BROWSER = 'Browser',
  NODEJS = 'Node.js',
}

function getEnvironment(): string {
  if (typeof window === 'undefined') {
    return Environment.NODEJS;
  } else {
    return Environment.BROWSER;
  }
}

export {getEnvironment, Environment};

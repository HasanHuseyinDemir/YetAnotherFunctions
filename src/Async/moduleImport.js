async function moduleImport(modulePath) {
    const module = await import(modulePath);
    return module;
  }
  
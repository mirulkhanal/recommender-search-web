if (process.argv.length > 4) {
  console.log('Usage: yarn seed [model_type] [seed_count]');
  process.exit(1);
} else {
  const modelType = process.argv[2];
  const dataCount = process.argv[3];

  switch (modelType) {
    case 'product':
      require('./productSeeder')(dataCount);
      break;
    default:
      console.log('Usage: yarn seed [model_type] [seed_count]');
      break;
  }
}

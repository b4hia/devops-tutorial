export default { extends: ['@commitlint/config-conventional'],
		 rules: {
		 'type-enum':[2, 'always', ['func', 'corr', 'docs', 'refa', 'test', 'perf']],
		 'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
};

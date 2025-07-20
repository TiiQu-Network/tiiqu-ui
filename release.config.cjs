module.exports = {
  branches: ["main", { name: "next", prerelease: true }],
  tagFormat: "v${version}",
  preset: "conventionalcommits",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
  changelogFile: "CHANGELOG.md",
};

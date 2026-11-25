# The Funniest Toaster Error

[![make.fun competition](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![make.fun rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/anaughtyboy/makefun-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![make.fun reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/anaughtyboy/makefun-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A make.fun entry for [The Funniest Toaster Error](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): the funniest error message a kitchen toaster would show its owner, in 120 characters or fewer.

## The line

> ERROR 404: Bread not found. Please insert bread and try again.

## How it works

`main.ts` validates the line (1–120 characters, a single line, no leading or trailing whitespace, no control characters), writes exactly those bytes to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing newline, then reads the file back as raw bytes and confirms an exact match.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-toaster-error node main.ts
```

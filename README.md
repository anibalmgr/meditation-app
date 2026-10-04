## Personal Meditation App

This project is an Android application for a simple meditation app.

The first iteration is a simple application that allows to set a timer but it never disconnects from your headphones. This is achieved by playing a inaudible white noise that keeps the headphones on.

A second iteration will introduce configuration for background noise or music that can be generated with a simpler synth, using base white noise generation and filters.

### Why am I doing this?

I have been using AI more and more both for work and personal projects, I am looking to learn something new and build a tool that I would like to have. All the technologies in this project are relatively new for me, I have extensive experience with React and Python, but I don't have a great experience with native application.

### How I will use AI?

I will write all the code myself and follow documentation, but I am using Claude to help me find the right resources and technologies, and to guide me when I am stuck.

### Technologies

- React Native with [expo](https://expo.dev/)
- Rust for the audio engine

## Development

To run install this project run:

```bash
pnpm install
```

## Available commands:

| Command        | Description                                          |
| -------------- | ---------------------------------------------------- |
| `pnpm install` | Install dependencies                                 |
| `pnpm start`   | Start the Expo dev server (Metro)                    |
| `pnpm android` | Start the dev server and open the app on Android     |
| `pnpm web`     | Start the dev server and open the app in the browser |
| `pnpm lint`    | Lint the project with `expo lint`                    |

### Licence

Code is MIT. The app name and icon are not included in that grant.

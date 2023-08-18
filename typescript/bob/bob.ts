
export function hey(message: string): string {
  const isUpperCase = (str:string) => str === str.toUpperCase();
  message = message.trim()
  var pattern = /[A-Z]+/
  var is_yelling = isUpperCase(message)
  var is_question = message.endsWith("?")
  var is_silence = message == ""
  var is_letter = pattern.test(message)

  
  if (is_silence) return "Fine. Be that way!"
  if (is_yelling && is_letter && is_question) return "Calm down, I know what I'm doing!" 
  else if (is_question)return "Sure."
  else if (is_yelling && is_letter)return "Whoa, chill out!"
  return "Whatever."
}

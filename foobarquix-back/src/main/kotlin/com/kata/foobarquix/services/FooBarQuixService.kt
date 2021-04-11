package com.kata.foobarquix.services

import org.springframework.stereotype.Component

@Component
class FooBarQuixService {
	object FooBarQuixConstants {
		const val FOO = "Foo"
		const val BAR = "Bar"
		const val QUIX = "Quix"
	}

	fun convertNumber(inputNumber: Int): String {
		var result: String = ""

		/* vérifier si  inputNumber est divisible par 3  */
		if (inputNumber % 3 == 0) {
			result += FooBarQuixConstants.FOO
		}
		/* vérifier si  inputNumber est divisible par 5  */
		if (inputNumber % 5 == 0) {
			result += FooBarQuixConstants.BAR
		}
        val str = (inputNumber).toString()
		for (i in str.indices) {
            when (str[i]) {
				'3' -> result += FooBarQuixConstants.FOO /* vérifier si  inputNumber contient 3  */
				'5' -> result += FooBarQuixConstants.BAR /* vérifier si  inputNumber contient 5  */
				'7' -> result += FooBarQuixConstants.QUIX /* vérifier si  inputNumber contient 7  */
				else -> {
				}
			}
		}
		return result.ifEmpty { str }
	}

}
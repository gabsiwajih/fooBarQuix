package com.kata.foobarquix

import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import com.kata.foobarquix.services.FooBarQuixService
import org.junit.jupiter.api.Assertions.assertEquals

@SpringBootTest
class FooBarQuixApplicationTests {
    private val fooBarQuixService = FooBarQuixService()

    @Test
    fun use_case_1_return_1() {
        val result = fooBarQuixService.convertNumber(1)
        assertEquals("1", result, "1 should return 1")
    }

    @Test
    fun use_case_3_return_FooFoo() {
        val result = fooBarQuixService.convertNumber(3)
        assertEquals("FooFoo", result, "3 should return FooFoo")
    }

    @Test
    fun use_case_5_return_BarBar() {
        val result = fooBarQuixService.convertNumber(5)
        assertEquals("BarBar", result, "5 should return BarBar")
    }

    @Test
    fun use_case_7_return_Quix() {
        val result = fooBarQuixService.convertNumber(7)
        assertEquals("Quix", result, "7 should return Quix")
    }

    @Test
    fun use_case_9_return_Foo() {
        val result = fooBarQuixService.convertNumber(9)
        assertEquals("Foo", result, "9 should return Foo")
    }

    @Test
    fun use_case_51_return_FooBar() {
        val result = fooBarQuixService.convertNumber(51)
        assertEquals("FooBar", result, "51 should return FooBar")
    }

    @Test
    fun use_case_53_return_BarFoo() {
        val result = fooBarQuixService.convertNumber(53)
        assertEquals("BarFoo", result, "53 should return BarFoo")
    }

    @Test
    fun use_case_33_return_FooFooFoo() {
        val result = fooBarQuixService.convertNumber(33)
        assertEquals("FooFooFoo", result, "33 should return FooFooFoo")
    }

    @Test
    fun use_case_27_return_FooQuix() {
        val result = fooBarQuixService.convertNumber(27)
        assertEquals("FooQuix", result, "27 should return FooQuix")
    }

    @Test
    fun use_case_15_return_FooBarBar() {
        val result = fooBarQuixService.convertNumber(15)
        assertEquals("FooBarBar", result, "15 should return FooBarBar")
    }

}

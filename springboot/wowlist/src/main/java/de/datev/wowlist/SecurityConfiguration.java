package de.datev.wowlist;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity.headers().frameOptions().disable()
                .and()
                .csrf().disable()
                // allow access to todo endpoints
                .authorizeHttpRequests()
                .requestMatchers(new AntPathRequestMatcher("/todos/**"))
                .permitAll()
                .and()
                // allow access to console endpoint
                .authorizeHttpRequests()
                .requestMatchers(new AntPathRequestMatcher ("/h2-console/**"))
                .permitAll()
                .and()
                .authorizeHttpRequests()
                .requestMatchers(new AntPathRequestMatcher ("/hello/**"))
                .authenticated()
                .and().formLogin()
                .and()
                .build();
    }

    @Bean
    public UserDetailsService users() {
        User.UserBuilder builder = User.withDefaultPasswordEncoder();
        UserDetails user = builder
                .username("jens")
                .password("123")
                .roles("USER")
                .build();


        return new InMemoryUserDetailsManager(user);
    }
}

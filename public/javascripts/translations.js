I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"account_activations":{"edit":{"account_activation":"Account activation","invalid_activation_link":"Invalid activation link"}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"errors":{"array?":"must be an array","attr?":"is missing","bool?":"must be boolean","connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","date?":"must be a date","date_time?":"must be a date time","decimal?":"must be a decimal","empty?":"must be empty","eql?":"must be equal to %{left}","even?":"must be even","excluded_from?":{"arg":{"default":"must not be one of: %{list}","range":"must not be one of: %{list_left} - %{list_right}"}},"excludes?":"must not include %{value}","exclusion?":"must not be one of: %{list}","false?":"must be false","filled?":"must be filled","float?":"must be a float","format":"%{attribute} %{message}","format?":"is in invalid format","gt?":"must be greater than %{num}","gteq?":"must be greater than or equal to %{num}","hash?":"must be a hash","included_in?":{"arg":{"default":"must be one of: %{list}","range":"must be one of: %{list_left} - %{list_right}"}},"includes?":"must include %{value}","inclusion?":"must be one of: %{list}","int?":"must be an integer","key?":"is missing","lt?":"must be less than %{num}","lteq?":"must be less than or equal to %{num}","max_size?":"size cannot be greater than %{num}","messages":{"accepted":"must be accepted","blank":"can't be blank","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"doesn't match %{attribute}","content_type_blacklist_error":"You are not allowed to upload %{content_type} files","content_type_whitelist_error":"You are not allowed to upload %{content_type} files, allowed types: %{allowed_types}","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","extension_blacklist_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_whitelist_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","max_size_error":"File size should be less than %{max_size}","min_size_error":"File size should be greater than %{min_size}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image?","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"min_size?":"size cannot be less than %{num}","none?":"cannot be defined","not_eql?":"must not be equal to %{left}","number?":"must be a number","odd?":"must be odd","or":"or","size?":{"arg":{"default":"size must be %{size}","range":"size must be within %{size_left} - %{size_right}"},"value":{"string":{"arg":{"default":"length must be %{size}","range":"length must be within %{size_left} - %{size_right}"}}}},"str?":"must be a string","time?":"must be a time","true?":"must be true","type?":"must be %{type}","unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"page_entries_info":{"entry":{"one":"entry","other":"entries","zero":"entries"},"more_pages":{"display_entries":"Displaying %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e of \u003cb\u003e%{total}\u003c/b\u003e in total"},"one_page":{"display_entries":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{entry_name}","other":"Displaying \u003cb\u003eall %{count}\u003c/b\u003e %{entry_name}","zero":"No %{entry_name} found"}}},"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"layouts":{"application":{"help":"Help","home":"Home","login":"Login","ruby_on_rails_tutorial_sample_app":"Ruby on Rails Tutorial Sample App","sample_app":"sample app"},"footer":{"about":"About","by":"by","contact":"Contact","michael_hartl":"Michael Hartl","news":"News","the":"The"},"header":{"account":"Account","help":"help","home":"home","log_in":"Log In","log_out":"Log out","profile":"Profile","sample_app":"sample app","setting":"Setting","users":"Users"}},"microposts":{"create":{"created":"Micropost created!"},"destroy":{"post_deleted":"Micropost deleted"},"micropost":{"ago":"ago.","are_u_sure":"Are you sure?","posted":"Posted","should_be_less_than_5MB":"should be less than 5MB"}},"number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password_resets":{"create":{"email_address_not_found":"Email address not found","email_sent_with_password_reset_instructions":"Email sent with password reset instructions"},"edit":{"confirmation":"Confirmation","reset_password":"Reset password","shared_error_messages":"shared/error_messages","update_pass":"Update password"},"new":{"forgot_password":"Forgot password","submit":"Submit"},"show":{"password_expired":"Password reset has expired.","user_not_found":"User not found"},"update":{"not_empty":"can't be empty","reset_succeed":"Password has been reset."}},"sessions":{"create":{"invalid_email_or_password_combination":"Invalid email/password combination"},"new":{"forgot_password":"(Forgot password?)","log_in":"Log in","new_user":"New user?","remember_me_on_this_computer":"Remember me on this computer","sign_up_now":"Sign up now!"}},"shared":{"error_message":{"the_form_contains":"The form contains"},"micropost_form":{"compose":"Compose new micropost...","post":"Post"},"user_info":{"view_my_profile":"View my profile"}},"static_pages":{"about":{"This_is_the_sample_application_for_the_tutorial":"This is the sample application for the tutorial.","about":"About","book":"book","is_a":"is a","ruby_on_rails":"Ruby on Rails.","ruby_on_rails_tutorial":"Ruby on Rails Tutorial","screencast_series":"screencast series","the":"The","to_teach_web_development_with":"to teach web development with"},"contact":{"contact":"Contact","contact_pages":"contact pages.","contact_the_ruby_on_rails_tutorial_about_the_sample_app_at_the":"Contact the Ruby on Rails Tutorial about the sample app at the"},"help":{"To_get_help_on_this_sample_app_see_the":"To get help on this sample app, see the","get_help_on_the_Ruby_on_Rails_Tutorial_at_the":"Get help on the Ruby on Rails Tutorial at the","help":"Help","rails_tutorial_help_section":"Rails Tutorial help section.","ruby_on_rails_tutorial_book":"Ruby on Rails Tutorial book."},"home":{"home":"Home","kitten_tag":"Kitten image","rails_logo":"Rails logo","ruby_on_rails_tutorial":"Ruby on Rails Tutorial","sample_application":"sample application.","sign_up_now":"Sign up now!","this_is_the_home_page_for_the":"This is the home page for the","welcome_to_sample_app":"Welcome to sample app"}},"support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"user_mailer":{"account_activation":{"active":"Activate","hi":"Hi,","sample_app":"Sample App","welcome_to_the_sample_app_click_the_link_to_activate_your_account":"Welcome to the Sample App! Click on the link below to activate your account:"},"password_reset":{"click_the_link_to_reset_password":"To reset your password click the link below:","if_not_request_password_to_reset_ignore_this_email_and_password":"If you did not request your password to be reset, please ignore this email and your password will stay as it is.","password_reset":"Password reset","reset_password":"Reset password","this_link_expire_in_two_hours":"This link will expire in two hours."}},"users":{"create":{"account_not_activated":"Account not activated.","check_ur_email_for_the_activation_link":"Check your email for the activation link.","please_check_your_email_to_activate_your_account":"Please check your email to activate your account."},"destroy":{"user_delete_failed":"User delete failed","user_delete_succeed":"User delete succeed."},"edit":{"change":"change","confirmation":"Confirmation","edit_user":"Edit user","please_log_in":"Please log in.","save_changes":"Save changes","update_your_profile":"Update your profile"},"index":{"all_users":"All users"},"new":{"confirmation":"Confirmation","create_my_account":"Create my account","sign_up":"Sign up","this_will_be_a_signup_page_for_new_users":"This will be a signup page for new users."},"show":{"user_not_found":"User not found!"},"update":{"profile_updated":"Profile updated"},"user":{"delete":"delete","you_sure":"Are you sure?"}},"views":{"pagination":{"first":"\u0026laquo; First","last":"Last \u0026raquo;","next":"Next \u0026rsaquo;","previous":"\u0026lsaquo; Prev","truncate":"\u0026hellip;"}}});

# CMake generated Testfile for 
# Source directory: /root/catkin_ws/src/mavros/mavros
# Build directory: /root/catkin_ws/build/mavros
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_mavros_gtest_libmavros-frame-conversions-test "/root/catkin_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-frame-conversions-test.xml" "--return-code" "/root/catkin_ws/devel/.private/mavros/lib/mavros/libmavros-frame-conversions-test --gtest_output=xml:/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-frame-conversions-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-frame-conversions-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;227;catkin_add_gtest;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;0;")
add_test(_ctest_mavros_gtest_libmavros-sensor-orientation-test "/root/catkin_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-sensor-orientation-test.xml" "--return-code" "/root/catkin_ws/devel/.private/mavros/lib/mavros/libmavros-sensor-orientation-test --gtest_output=xml:/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-sensor-orientation-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-sensor-orientation-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;230;catkin_add_gtest;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;0;")
add_test(_ctest_mavros_gtest_libmavros-quaternion-utils-test "/root/catkin_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-quaternion-utils-test.xml" "--return-code" "/root/catkin_ws/devel/.private/mavros/lib/mavros/libmavros-quaternion-utils-test --gtest_output=xml:/root/catkin_ws/build/mavros/test_results/mavros/gtest-libmavros-quaternion-utils-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-quaternion-utils-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;233;catkin_add_gtest;/root/catkin_ws/src/mavros/mavros/CMakeLists.txt;0;")
subdirs("gtest")

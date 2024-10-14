# Use the ROS Noetic base image
FROM ros:noetic-ros-base

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Install required dependencies
RUN apt-get update && apt-get install -y \
    python3-catkin-tools \
    python3-rosinstall \
    python3-rosinstall-generator \
    python3-wstool \
    build-essential \
    geographiclib-tools \
    ros-noetic-geographic-msgs \
    ros-noetic-angles \
    ros-noetic-diagnostic-updater \
    ros-noetic-diagnostic-msgs \
    ros-noetic-message-filters \
    ros-noetic-eigen-stl-containers \
    ros-noetic-libmavconn \
    ros-noetic-pluginlib \
    ros-noetic-tf2-ros \
    ros-noetic-tf2-eigen \
    ros-noetic-eigen-conversions \
    ros-noetic-control-toolbox \
    ros-noetic-urdf \
    ros-noetic-geometry-msgs \
    ros-noetic-mavros-msgs \
    ros-noetic-nav-msgs \
    ros-noetic-sensor-msgs \
    ros-noetic-trajectory-msgs \
    ros-noetic-std-msgs \
    ros-noetic-std-srvs \
    ros-noetic-visualization-msgs \
    ros-noetic-control-toolbox \
    ros-noetic-tf \
    libconsole-bridge-dev \
    libeigen3-dev \
    libyaml-cpp-dev \
    libgeographic-dev\
    python3-pip \
    libxml2-dev \
    libxslt-dev \
    python3-lxml \
    wget \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install the Python 'future' module, required by pymavlink
RUN pip3 install future empy

# Install GeographicLib datasets (required for MAVROS)
RUN wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh \
    && chmod +x install_geographiclib_datasets.sh \
    && ./install_geographiclib_datasets.sh

# Source ROS environment in new shells
RUN echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc

# Default command to start a shell
CMD ["bash"]

